import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "npm:zod@3.23.8";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
const ContactInquirySchema = z.object({
  name: z.string().max(100, "Name must be less than 100 characters").optional().default(''),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().max(30, "Phone number must be less than 30 characters").optional().default(''),
  message: z.string().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactInquiry = z.infer<typeof ContactInquirySchema>;

// Sanitize all string fields in the data object
function sanitizeContactData(data: ContactInquiry): ContactInquiry {
  return {
    name: sanitizeHtml(data.name || ''),
    email: data.email, // Email is validated, no need to sanitize for display
    phone: sanitizeHtml(data.phone || ''),
    message: sanitizeHtml(data.message),
  };
}

function generateAdminEmailHtml(data: ContactInquiry): string {
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
        .message-content { white-space: pre-wrap; background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>📧 Neue Kontaktanfrage</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">von ${data.name || 'Unbekannt'}</p>
      </div>
      
      <div class="content">
        <div class="section">
          <h3>📋 Kontaktdaten</h3>
          ${data.name ? `
          <div class="detail-row">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          ` : ''}
          <div class="detail-row">
            <span class="label">E-Mail:</span>
            <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
          </div>
          ${data.phone ? `
          <div class="detail-row">
            <span class="label">Telefon:</span>
            <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
          </div>
          ` : ''}
        </div>

        <div class="section">
          <h3>💬 Nachricht</h3>
          <div class="message-content">${data.message}</div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateCustomerEmailHtml(data: ContactInquiry): string {
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
        .footer { background: #2d5016; color: white; padding: 20px 30px; border-radius: 0 0 12px 12px; text-align: center; }
        .footer a { color: #a8d08d; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Vielen Dank für deine Nachricht!</h1>
        <p>Wir haben deine Anfrage erhalten</p>
      </div>
      
      <div class="content">
        <p>Hallo${data.name ? ` ${data.name}` : ''},</p>
        
        <p>vielen Dank, dass du dich an uns gewendet hast! Wir haben deine Nachricht erhalten und werden uns schnellstmöglich bei dir melden.</p>
        
        <div class="summary">
          <h3>📋 Deine Nachricht</h3>
          <p style="white-space: pre-wrap; margin: 0;">${data.message}</p>
        </div>
        
        <h3>⏱️ Was passiert als Nächstes?</h3>
        <p>Unser Team wird deine Anfrage prüfen und sich <strong>innerhalb von 24 Stunden</strong> bei dir melden.</p>
        
        <p>Falls du in der Zwischenzeit Fragen hast, erreichst du uns jederzeit:</p>
        <ul>
          <li>📞 Telefon: <a href="tel:+4921136180115">0211 36180115</a></li>
          <li>📧 E-Mail: <a href="mailto:info@sattuni.de">info@sattuni.de</a></li>
        </ul>
        
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
    const validationResult = ContactInquirySchema.safeParse(rawData);
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
    const data = sanitizeContactData(validationResult.data);

    console.log("Processing contact inquiry from:", data.email);

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "Sattuni Website <noreply@sattuni.de>",
      to: [ADMIN_EMAIL],
      replyTo: data.email,
      subject: `Neue Kontaktanfrage${data.name ? ` von ${data.name}` : ''}`,
      html: generateAdminEmailHtml(data),
    });

    if (adminEmailResult.error) {
      console.error("Admin email error:", adminEmailResult.error);
      throw new Error("Failed to send admin notification");
    }

    console.log("Admin email sent successfully:", adminEmailResult.data?.id);

    // Send confirmation email to customer
    const customerEmailResult = await resend.emails.send({
      from: "Sattuni <noreply@sattuni.de>",
      to: [data.email],
      subject: "Danke für deine Nachricht – Sattuni",
      html: generateCustomerEmailHtml(data),
    });

    if (customerEmailResult.error) {
      console.error("Customer email error:", customerEmailResult.error);
      // Don't throw - admin got the message, customer confirmation is secondary
    } else {
      console.log("Customer email sent successfully:", customerEmailResult.data?.id);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact inquiry received successfully"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error) {
    console.error("Error processing contact inquiry:", error);
    
    // Return generic error to client (don't expose internal details)
    return new Response(
      JSON.stringify({ 
        error: "An error occurred processing your request. Please try again later."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
