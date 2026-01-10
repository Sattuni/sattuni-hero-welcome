import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const ADMIN_EMAIL = "sattunidus@gmail.com";

interface CateringInquiry {
  // Basic info
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  time: string;
  guestCount: number;
  
  // Menu info
  menuType: string;
  selectedPackageName: string;
  selectedPackagePrice: string;
  totalPrice: string;
  
  // Custom menu items
  customAppetizers: string;
  customMainCourses: string;
  customSideDishes: string;
  customDesserts: string;
  
  // Equipment
  equipmentChafings: boolean;
  equipmentBesteck: boolean;
  equipmentTeller: boolean;
  equipmentSchalen: boolean;
  
  comment: string;
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
            <span class="label">Datum:</span>
            <span class="value">${data.date}</span>
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
            <div class="highlight">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>Geschätzter Gesamtpreis:</span>
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
          <div class="detail-item"><strong>Datum:</strong> ${data.date}</div>
          <div class="detail-item"><strong>Anzahl Personen:</strong> ${data.guestCount}</div>
          <div class="detail-item"><strong>Menü:</strong> ${data.menuType === 'Festes Paket' ? data.selectedPackageName : 'Individuelles Menü'}</div>
          <div class="detail-item"><strong>Lieferadresse:</strong> ${data.address}</div>
        </div>
        
        <h3>⏱️ Was passiert als Nächstes?</h3>
        <p>Unser Team prüft deine Anfrage und erstellt ein individuelles Angebot für dich. <strong>Wir melden uns innerhalb von 24 Stunden</strong> telefonisch oder per E-Mail bei dir.</p>
        
        <p>Falls du in der Zwischenzeit Fragen hast, erreichst du uns jederzeit:</p>
        <ul>
          <li>📞 Telefon: <a href="tel:+4921112345678">0211 1234567</a></li>
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
    const data: CateringInquiry = await req.json();

    console.log("Processing catering inquiry from:", data.email);

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Sattuni Catering <onboarding@resend.dev>",
      to: [ADMIN_EMAIL],
      subject: `🍽️ Neue Catering-Anfrage: ${data.name} - ${data.date} (${data.guestCount} Pers.)`,
      html: generateAdminEmailHtml(data),
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Sattuni Catering <onboarding@resend.dev>",
      to: [data.email],
      subject: "✅ Deine Catering-Anfrage bei Sattuni",
      html: generateCustomerEmailHtml(data),
    });

    console.log("Customer email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        adminEmailId: adminEmailResponse.data?.id,
        customerEmailId: customerEmailResponse.data?.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-catering-inquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
