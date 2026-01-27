import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client with service role key for database operations
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const ADMIN_EMAIL = "info@sattuni.de";

// Rate limiting using in-memory store (resets on function cold start)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window

function checkRateLimit(identifier: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);
  
  if (!record || now > record.resetAt) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }
  
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// Sanitize string input to prevent HTML/script injection
function sanitizeHtml(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Zod schema for input validation
const CateringInquirySchema = z.object({
  // Basic info
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  company: z.string().max(200, "Company name must be less than 200 characters").optional().default(''),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[+\d\s\-()]+$/, "Phone number contains invalid characters"),
  address: z.string().min(5, "Address must be at least 5 characters").max(500, "Address must be less than 500 characters"),
  eventType: z.string().min(1, "Event type is required").max(100, "Event type must be less than 100 characters"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  time: z.string().max(20, "Time must be less than 20 characters").optional().default(''),
  guestCount: z.number().int().min(1, "Guest count must be at least 1").max(10000, "Guest count must be less than 10000"),
  
  // Menu info
  menuType: z.string().max(100, "Menu type must be less than 100 characters").optional().default(''),
  selectedPackageName: z.string().max(200, "Package name must be less than 200 characters").optional().default(''),
  selectedPackagePrice: z.string().max(50, "Package price must be less than 50 characters").optional().default(''),
  totalPrice: z.string().max(50, "Total price must be less than 50 characters").optional().default(''),
  equipmentCosts: z.string().max(50, "Equipment costs must be less than 50 characters").optional().default(''),
  
  // Custom menu items
  customAppetizers: z.string().max(1000, "Custom appetizers must be less than 1000 characters").optional().default(''),
  customMainCourses: z.string().max(1000, "Custom main courses must be less than 1000 characters").optional().default(''),
  customSideDishes: z.string().max(1000, "Custom side dishes must be less than 1000 characters").optional().default(''),
  customDesserts: z.string().max(1000, "Custom desserts must be less than 1000 characters").optional().default(''),
  
  // Equipment
  equipmentChafings: z.boolean().optional().default(false),
  equipmentBesteck: z.boolean().optional().default(false),
  equipmentTeller: z.boolean().optional().default(false),
  equipmentSchalen: z.boolean().optional().default(false),
  
  comment: z.string().max(2000, "Comment must be less than 2000 characters").optional().default(''),
});

type CateringInquiry = z.infer<typeof CateringInquirySchema>;

// Sanitize all string fields in the data object
function sanitizeInquiryData(data: CateringInquiry): CateringInquiry {
  return {
    ...data,
    name: sanitizeHtml(data.name),
    company: sanitizeHtml(data.company || ''),
    email: data.email, // Email is validated, no need to sanitize
    phone: sanitizeHtml(data.phone),
    address: sanitizeHtml(data.address),
    eventType: sanitizeHtml(data.eventType),
    time: sanitizeHtml(data.time || ''),
    menuType: sanitizeHtml(data.menuType || ''),
    selectedPackageName: sanitizeHtml(data.selectedPackageName || ''),
    selectedPackagePrice: sanitizeHtml(data.selectedPackagePrice || ''),
    totalPrice: sanitizeHtml(data.totalPrice || ''),
    equipmentCosts: sanitizeHtml(data.equipmentCosts || ''),
    customAppetizers: sanitizeHtml(data.customAppetizers || ''),
    customMainCourses: sanitizeHtml(data.customMainCourses || ''),
    customSideDishes: sanitizeHtml(data.customSideDishes || ''),
    customDesserts: sanitizeHtml(data.customDesserts || ''),
    comment: sanitizeHtml(data.comment || ''),
  };
}

// Format date from ISO to German format
function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

function formatEquipmentList(data: CateringInquiry, guestCount: number): string {
  const items: string[] = [];
  
  if (data.equipmentChafings) {
    const cost = guestCount >= 30 ? "kostenlos" : "+20€";
    items.push(`Chafing Dishes (${cost})`);
  }
  if (data.equipmentBesteck) {
    items.push(`Besteck (+${guestCount}€ = ${guestCount} × 1€)`);
  }
  if (data.equipmentTeller) {
    items.push(`Teller (+${guestCount}€ = ${guestCount} × 1€)`);
  }
  if (data.equipmentSchalen) {
    items.push("Porzellanschalen (+20€)");
  }
  
  return items.length > 0 ? items.join("<br>") : "Keine Equipment-Anfragen";
}

function generateAdminEmailHtml(data: CateringInquiry): string {
  const equipmentHtml = formatEquipmentList(data, data.guestCount);
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2d5016 0%, #4a7c23 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px; }
        .section { background: white; padding: 20px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #4a7c23; }
        .section h3 { margin-top: 0; color: #2d5016; font-size: 16px; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-row:last-child { border-bottom: none; }
        .label { font-weight: 600; color: #555; }
        .value { color: #333; }
        .highlight { background: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 15px; }
        .price-tag { font-size: 24px; font-weight: bold; color: #2d5016; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🍽️ Neue Catering-Anfrage</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">von ${data.name}</p>
      </div>
      
      <div class="content">
        <div class="section">
          <h3>📋 Kontaktdaten</h3>
          <div class="detail-row">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          ${data.company && data.company !== '-' ? `
          <div class="detail-row">
            <span class="label">Firma:</span>
            <span class="value">${data.company}</span>
          </div>
          ` : ''}
          <div class="detail-row">
            <span class="label">E-Mail:</span>
            <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
          </div>
          <div class="detail-row">
            <span class="label">Telefon:</span>
            <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
          </div>
          <div class="detail-row">
            <span class="label">Adresse:</span>
            <span class="value">${data.address}</span>
          </div>
        </div>

        <div class="section">
          <h3>📅 Event-Details</h3>
          <div class="detail-row">
            <span class="label">Anlass:</span>
            <span class="value"><strong>${data.eventType}</strong></span>
          </div>
          <div class="detail-row">
            <span class="label">Datum:</span>
            <span class="value">${formatDate(data.date)}</span>
          </div>
          <div class="detail-row">
            <span class="label">Uhrzeit:</span>
            <span class="value">${data.time}</span>
          </div>
          <div class="detail-row">
            <span class="label">Anzahl Personen:</span>
            <span class="value"><strong>${data.guestCount} Personen</strong></span>
          </div>
        </div>

        <div class="section">
          <h3>🍴 Menü-Auswahl</h3>
          <div class="detail-row">
            <span class="label">Menü-Typ:</span>
            <span class="value">${data.menuType}</span>
          </div>
          ${data.menuType === 'Festes Paket' ? `
            <div class="detail-row">
              <span class="label">Paket:</span>
              <span class="value"><strong>${data.selectedPackageName}</strong></span>
            </div>
            <div class="detail-row">
              <span class="label">Preis pro Person:</span>
              <span class="value">${data.selectedPackagePrice}</span>
            </div>
            ${data.equipmentCosts && data.equipmentCosts !== '-' ? `
            <div class="detail-row">
              <span class="label">Equipment-Kosten:</span>
              <span class="value">${data.equipmentCosts}</span>
            </div>
            ` : ''}
            <div class="highlight">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>Geschätzter Gesamtpreis (inkl. Equipment):</span>
                <span class="price-tag">${data.totalPrice}</span>
              </div>
            </div>
          ` : `
            <div class="detail-row">
              <span class="label">Vorspeisen:</span>
              <span class="value">${data.customAppetizers}</span>
            </div>
            <div class="detail-row">
              <span class="label">Hauptspeisen:</span>
              <span class="value">${data.customMainCourses}</span>
            </div>
            <div class="detail-row">
              <span class="label">Beilagen:</span>
              <span class="value">${data.customSideDishes || '-'}</span>
            </div>
            <div class="detail-row">
              <span class="label">Desserts:</span>
              <span class="value">${data.customDesserts}</span>
            </div>
            <div class="highlight">
              <p style="margin: 0; color: #555;">Preis auf Anfrage - individuelles Menü</p>
            </div>
          `}
        </div>

        <div class="section">
          <h3>🔧 Equipment-Anfragen</h3>
          <p style="margin: 0;">${equipmentHtml}</p>
        </div>

        <div class="section">
          <h3>💬 Anmerkungen</h3>
          <p style="margin: 0; white-space: pre-wrap;">${data.comment}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateCustomerEmailHtml(data: CateringInquiry): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2d5016 0%, #4a7c23 100%); color: white; padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center; }
        .header h1 { margin: 0 0 10px 0; font-size: 28px; }
        .header p { margin: 0; opacity: 0.9; font-size: 16px; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
        .summary { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .summary h3 { margin-top: 0; color: #2d5016; }
        .detail-item { padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-item:last-child { border-bottom: none; }
        .footer { background: #2d5016; color: white; padding: 20px 30px; border-radius: 0 0 12px 12px; text-align: center; }
        .footer a { color: #a8d08d; }
        .cta { display: inline-block; background: #4a7c23; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; margin-top: 15px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Vielen Dank für deine Anfrage!</h1>
        <p>Wir haben deine Catering-Anfrage erhalten</p>
      </div>
      
      <div class="content">
        <p>Hallo ${data.name},</p>
        
        <p>wir freuen uns über dein Interesse an unserem Catering-Service! Deine Anfrage ist bei uns eingegangen und wird schnellstmöglich bearbeitet.</p>
        
        <div class="summary">
          <h3>📋 Zusammenfassung deiner Anfrage</h3>
          <div class="detail-item"><strong>Anlass:</strong> ${data.eventType}</div>
          <div class="detail-item"><strong>Datum:</strong> ${formatDate(data.date)}</div>
          <div class="detail-item"><strong>Anzahl Personen:</strong> ${data.guestCount}</div>
          <div class="detail-item"><strong>Menü:</strong> ${data.menuType === 'Festes Paket' ? data.selectedPackageName : 'Individuelles Menü'}</div>
          <div class="detail-item"><strong>Lieferadresse:</strong> ${data.address}</div>
        </div>
        
        <h3>⏱️ Was passiert als Nächstes?</h3>
        <p>Unser Team prüft deine Anfrage und erstellt ein individuelles Angebot für dich. <strong>Wir melden uns innerhalb von 24 Stunden</strong> telefonisch oder per E-Mail bei dir.</p>
        
        <p>Falls du in der Zwischenzeit Fragen hast, erreichst du uns jederzeit:</p>
        <ul>
          <li>📞 Telefon: <a href="tel:+492113618011">0211 36180115</a></li>
          <li>📧 E-Mail: <a href="mailto:info@sattuni.de">info@sattuni.de</a></li>
        </ul>
        
        <p>Wir freuen uns darauf, dein Event kulinarisch zu begleiten!</p>
        
        <p>Herzliche Grüße,<br><strong>Dein Sattuni-Team</strong></p>
      </div>
      
      <div class="footer">
        <p style="margin: 0 0 10px 0;"><strong>Sattuni – Orientalisches Catering</strong></p>
        <p style="margin: 0; font-size: 14px;">
          <a href="https://sattuni.de">www.sattuni.de</a> | 
          <a href="mailto:info@sattuni.de">info@sattuni.de</a>
        </p>
      </div>
    </body>
    </html>
  `;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client identifier for rate limiting (IP or fallback)
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    // Check rate limit
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      console.log(`Rate limit exceeded for: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json",
            "Retry-After": "3600",
            ...corsHeaders 
          },
        }
      );
    }

    // Parse JSON body
    let rawData: unknown;
    try {
      rawData = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate input with Zod schema
    const validationResult = CateringInquirySchema.safeParse(rawData);
    if (!validationResult.success) {
      console.log("Validation failed:", validationResult.error.format());
      return new Response(
        JSON.stringify({ 
          error: "Invalid input data",
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize validated data to prevent XSS in emails
    const data = sanitizeInquiryData(validationResult.data);

    console.log("Processing catering inquiry from:", data.email);

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Sattuni Catering <info@sattuni.de>",
      to: [ADMIN_EMAIL],
      subject: `🍽️ Neue Catering-Anfrage: ${data.name} - ${data.date} (${data.guestCount} Pers.)`,
      html: generateAdminEmailHtml(data),
    });

    console.log("Admin email sent successfully");

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Sattuni Catering <info@sattuni.de>",
      to: [data.email],
      subject: "✅ Deine Catering-Anfrage bei Sattuni",
      html: generateCustomerEmailHtml(data),
    });

    console.log("Customer email sent successfully");

    // Save inquiry to database for follow-up tracking
    try {
      const { error: dbError } = await supabase
        .from("catering_inquiries")
        .insert({
          name: data.name,
          company: data.company || null,
          email: data.email,
          phone: data.phone,
          address: data.address,
          event_type: data.eventType,
          event_date: data.date,
          event_time: data.time || null,
          guest_count: data.guestCount,
          menu_type: data.menuType || "Nicht angegeben",
          selected_package_name: data.selectedPackageName || null,
          selected_package_price: data.selectedPackagePrice || null,
          total_price: data.totalPrice || null,
          equipment_costs: data.equipmentCosts || null,
          custom_appetizers: data.customAppetizers || null,
          custom_main_courses: data.customMainCourses || null,
          custom_side_dishes: data.customSideDishes || null,
          custom_desserts: data.customDesserts || null,
          equipment_chafings: data.equipmentChafings || false,
          equipment_besteck: data.equipmentBesteck || false,
          equipment_teller: data.equipmentTeller || false,
          equipment_schalen: data.equipmentSchalen || false,
          comment: data.comment || null,
          status: "pending",
          ip_address: clientIp,
          source: "website",
        });

      if (dbError) {
        console.error("Error saving to database:", dbError);
        // Don't fail the request - email was already sent successfully
      } else {
        console.log("Inquiry saved to database for follow-up tracking");
      }
    } catch (dbSaveError) {
      console.error("Database save error:", dbSaveError);
      // Don't fail the request - email was already sent successfully
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: unknown) {
    console.error("Error in send-catering-inquiry function:", error);
    // Return generic error message without exposing internal details
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
