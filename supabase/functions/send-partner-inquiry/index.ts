import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const ADMIN_EMAIL = "info@sattuni.de";

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(identifier: string): { allowed: boolean } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);
  if (!record || now > record.resetAt) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (record.count >= RATE_LIMIT_MAX) return { allowed: false };
  record.count++;
  return { allowed: true };
}

function sanitizeHtml(input: string): string {
  if (!input) return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const PartnerInquirySchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(200).optional().default(""),
  email: z.string().email().max(255),
  comment: z.string().max(2000).optional().default(""),
});

function generateAdminEmailHtml(data: { name: string; company: string; email: string; comment: string }): string {
  return `
    <!DOCTYPE html><html><head><meta charset="utf-8">
    <style>
      body { font-family: 'Segoe UI', Tahoma, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background: linear-gradient(135deg, #1a3a5c 0%, #2d6a9f 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
      .header h1 { margin: 0; font-size: 22px; }
      .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px; }
      .section { background: white; padding: 20px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #2d6a9f; }
      .detail-row { padding: 8px 0; border-bottom: 1px solid #eee; }
      .detail-row:last-child { border-bottom: none; }
      .label { font-weight: 600; color: #555; }
    </style></head><body>
      <div class="header">
        <h1>🤝 Neue Partner-Anfrage</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Catering Partner Modell</p>
      </div>
      <div class="content">
        <div class="section">
          <h3 style="margin-top:0; color:#1a3a5c;">📋 Kontaktdaten</h3>
          <div class="detail-row"><span class="label">Name:</span> ${data.name}</div>
          ${data.company ? `<div class="detail-row"><span class="label">Firma:</span> ${data.company}</div>` : ""}
          <div class="detail-row"><span class="label">E-Mail:</span> <a href="mailto:${data.email}">${data.email}</a></div>
        </div>
        ${data.comment ? `
        <div class="section">
          <h3 style="margin-top:0; color:#1a3a5c;">💬 Nachricht</h3>
          <p style="margin:0; white-space:pre-wrap;">${data.comment}</p>
        </div>` : ""}
        <p style="color:#888; font-size:12px; text-align:center; margin-top:20px;">
          Diese Anfrage kam über das Catering Partner Formular auf sattuni.de
        </p>
      </div>
    </body></html>`;
}

function generateCustomerEmailHtml(data: { name: string }): string {
  return `
    <!DOCTYPE html><html><head><meta charset="utf-8">
    <style>
      body { font-family: 'Segoe UI', Tahoma, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background: linear-gradient(135deg, #2d5016 0%, #4a7c23 100%); color: white; padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center; }
      .header h1 { margin: 0 0 10px 0; font-size: 26px; }
      .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
      .footer { background: #2d5016; color: white; padding: 20px 30px; border-radius: 0 0 12px 12px; text-align: center; }
      .footer a { color: #a8d08d; }
    </style></head><body>
      <div class="header">
        <h1>Danke für dein Interesse!</h1>
        <p style="margin:0; opacity:0.9;">Catering Partner Modell</p>
      </div>
      <div class="content">
        <p>Hallo ${data.name},</p>
        <p>schön, dass ihr euch für unser Catering Partner Modell interessiert! Wir haben eure Anfrage erhalten.</p>
        <h3>⏱️ Wie geht es weiter?</h3>
        <p>Wir melden uns <strong>innerhalb von 24 Stunden</strong> bei euch, um alles Weitere zu besprechen — unverbindlich und persönlich.</p>
        <p>Falls ihr in der Zwischenzeit Fragen habt:</p>
        <ul>
          <li>📞 <a href="tel:+492113618011">0211 36180115</a></li>
          <li>📧 <a href="mailto:info@sattuni.de">info@sattuni.de</a></li>
        </ul>
        <p>Wir freuen uns auf die Zusammenarbeit!</p>
        <p>Herzliche Grüße,<br><strong>Euer Sattuni-Team</strong></p>
      </div>
      <div class="footer">
        <p style="margin:0 0 10px 0;"><strong>Sattuni – Orientalisches Catering</strong></p>
        <p style="margin:0; font-size:14px;">
          <a href="https://sattuni.de">www.sattuni.de</a> |
          <a href="mailto:info@sattuni.de">info@sattuni.de</a>
        </p>
      </div>
    </body></html>`;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!checkRateLimit(clientIp).allowed) {
      return new Response(JSON.stringify({ error: "Too many requests." }), {
        status: 429,
        headers: { "Content-Type": "application/json", "Retry-After": "3600", ...corsHeaders },
      });
    }

    let rawData: unknown;
    try {
      rawData = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const result = PartnerInquirySchema.safeParse(rawData);
    if (!result.success) {
      return new Response(JSON.stringify({ error: "Invalid input", details: result.error.issues }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const data = {
      name: sanitizeHtml(result.data.name),
      company: sanitizeHtml(result.data.company || ""),
      email: result.data.email,
      comment: sanitizeHtml(result.data.comment || ""),
    };

    // Save to database
    const { error: dbError } = await supabase.from("partner_inquiries").insert({
      name: data.name,
      company: data.company,
      email: data.email,
      comment: data.comment,
    });

    if (dbError) {
      console.error("DB error:", dbError);
    }

    // Send admin notification
    const adminEmail = await resend.emails.send({
      from: "Sattuni Partner <info@sattuni.de>",
      to: [ADMIN_EMAIL],
      subject: `🤝 Partner-Anfrage von ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: generateAdminEmailHtml(data),
    });
    console.log("Admin email sent:", adminEmail);

    // Send customer confirmation
    const customerEmail = await resend.emails.send({
      from: "Sattuni Catering <info@sattuni.de>",
      to: [data.email],
      subject: "Eure Partner-Anfrage bei Sattuni – wir melden uns!",
      html: generateCustomerEmailHtml(data),
    });
    console.log("Customer email sent:", customerEmail);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
