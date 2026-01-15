import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const ADMIN_EMAIL = "info@sattuni.de";
const FOLLOW_UP_DAYS = 4; // Send follow-up after 4 days

interface CateringInquiry {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  address: string;
  event_type: string;
  event_date: string;
  event_time: string | null;
  guest_count: number;
  menu_type: string;
  selected_package_name: string | null;
  total_price: string | null;
  created_at: string;
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

// Format short date for subject line
function formatShortDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

function generateFollowUpEmailHtml(inquiry: CateringInquiry): string {
  const createdDate = formatDate(inquiry.created_at);
  const eventDate = formatDate(inquiry.event_date);
  const menuInfo = inquiry.menu_type === 'Festes Paket' && inquiry.selected_package_name 
    ? `${inquiry.selected_package_name}` 
    : 'Individuelles Menü';
  const priceInfo = inquiry.total_price ? ` (ca. ${inquiry.total_price})` : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #b45309 0%, #d97706 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
        .header h1 { margin: 0; font-size: 22px; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; }
        .content { background: #fffbeb; padding: 25px; border: 2px solid #fbbf24; border-top: none; }
        .alert-box { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 15px; margin-bottom: 20px; }
        .alert-box p { margin: 0; color: #92400e; }
        .section { background: white; padding: 20px; margin-bottom: 15px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .section h3 { margin-top: 0; color: #92400e; font-size: 16px; border-bottom: 2px solid #fbbf24; padding-bottom: 8px; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
        .detail-row:last-child { border-bottom: none; }
        .label { font-weight: 600; color: #555; }
        .value { color: #333; }
        .cta-buttons { text-align: center; margin-top: 20px; }
        .cta-btn { display: inline-block; padding: 12px 24px; border-radius: 6px; text-decoration: none; margin: 5px; font-weight: 600; }
        .cta-phone { background: #059669; color: white; }
        .cta-email { background: #2563eb; color: white; }
        .footer { background: #78350f; color: white; padding: 15px; border-radius: 0 0 12px 12px; text-align: center; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>⏰ Erinnerung: Nachfassen!</h1>
        <p>Anfrage wartet auf Rückmeldung</p>
      </div>
      
      <div class="content">
        <div class="alert-box">
          <p><strong>📅 Diese Anfrage ist am ${createdDate} eingegangen</strong> und wurde noch nicht als bearbeitet markiert. Bitte kontaktiere den Kunden.</p>
        </div>

        <div class="section">
          <h3>👤 Kontaktdaten</h3>
          <div class="detail-row">
            <span class="label">Name:</span>
            <span class="value"><strong>${inquiry.name}</strong></span>
          </div>
          ${inquiry.company ? `
          <div class="detail-row">
            <span class="label">Firma:</span>
            <span class="value">${inquiry.company}</span>
          </div>
          ` : ''}
          <div class="detail-row">
            <span class="label">Telefon:</span>
            <span class="value"><a href="tel:${inquiry.phone}" style="color: #059669; font-weight: 600;">${inquiry.phone}</a></span>
          </div>
          <div class="detail-row">
            <span class="label">E-Mail:</span>
            <span class="value"><a href="mailto:${inquiry.email}" style="color: #2563eb;">${inquiry.email}</a></span>
          </div>
          <div class="detail-row">
            <span class="label">Adresse:</span>
            <span class="value">${inquiry.address}</span>
          </div>
        </div>

        <div class="section">
          <h3>📋 Event-Details</h3>
          <div class="detail-row">
            <span class="label">Anlass:</span>
            <span class="value"><strong>${inquiry.event_type}</strong></span>
          </div>
          <div class="detail-row">
            <span class="label">Datum:</span>
            <span class="value">${eventDate}</span>
          </div>
          ${inquiry.event_time ? `
          <div class="detail-row">
            <span class="label">Uhrzeit:</span>
            <span class="value">${inquiry.event_time}</span>
          </div>
          ` : ''}
          <div class="detail-row">
            <span class="label">Personenzahl:</span>
            <span class="value"><strong>${inquiry.guest_count} Personen</strong></span>
          </div>
          <div class="detail-row">
            <span class="label">Menü:</span>
            <span class="value">${menuInfo}${priceInfo}</span>
          </div>
        </div>

        <div class="cta-buttons">
          <a href="tel:${inquiry.phone}" class="cta-btn cta-phone">📞 Jetzt anrufen</a>
          <a href="mailto:${inquiry.email}" class="cta-btn cta-email">✉️ E-Mail senden</a>
        </div>
      </div>
      
      <div class="footer">
        <p style="margin: 0;">Automatische Erinnerung von Sattuni Follow-up System</p>
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
    console.log("Starting follow-up email check...");

    // Calculate the date threshold (4 days ago)
    const now = new Date();
    const thresholdDate = new Date(now.getTime() - (FOLLOW_UP_DAYS * 24 * 60 * 60 * 1000));
    const thresholdISOString = thresholdDate.toISOString();

    console.log(`Looking for pending inquiries older than: ${thresholdISOString}`);

    // Find all pending inquiries that:
    // 1. Have status = 'pending'
    // 2. Have no followup_sent_at (never received a follow-up)
    // 3. Were created more than 4 days ago
    const { data: pendingInquiries, error: fetchError } = await supabase
      .from("catering_inquiries")
      .select("*")
      .eq("status", "pending")
      .is("followup_sent_at", null)
      .lt("created_at", thresholdISOString);

    if (fetchError) {
      console.error("Error fetching pending inquiries:", fetchError);
      return new Response(
        JSON.stringify({ error: "Failed to fetch pending inquiries" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`Found ${pendingInquiries?.length || 0} inquiries needing follow-up`);

    if (!pendingInquiries || pendingInquiries.length === 0) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "No pending inquiries require follow-up",
          followupsSent: 0
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    let successCount = 0;
    let errorCount = 0;

    // Process each pending inquiry
    for (const inquiry of pendingInquiries) {
      try {
        const shortDate = formatShortDate(inquiry.created_at);
        
        // Send follow-up email to admin
        const emailResponse = await resend.emails.send({
          from: "Sattuni Follow-up <info@sattuni.de>",
          to: [ADMIN_EMAIL],
          subject: `⏰ Erinnerung: ${inquiry.name} nachfassen - Anfrage vom ${shortDate}`,
          html: generateFollowUpEmailHtml(inquiry as CateringInquiry),
        });

        console.log(`Follow-up email sent for inquiry ${inquiry.id}:`, emailResponse);

        // Update the inquiry to mark follow-up as sent
        const { error: updateError } = await supabase
          .from("catering_inquiries")
          .update({ followup_sent_at: new Date().toISOString() })
          .eq("id", inquiry.id);

        if (updateError) {
          console.error(`Error updating followup_sent_at for ${inquiry.id}:`, updateError);
        }

        successCount++;
      } catch (emailError) {
        console.error(`Error sending follow-up for inquiry ${inquiry.id}:`, emailError);
        errorCount++;
      }
    }

    console.log(`Follow-up process complete. Sent: ${successCount}, Errors: ${errorCount}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Follow-up emails processed`,
        followupsSent: successCount,
        errors: errorCount
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: unknown) {
    console.error("Error in send-followup-emails function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred processing follow-up emails" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
