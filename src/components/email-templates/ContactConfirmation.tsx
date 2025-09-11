import React from 'react';
import { ContactFormData } from '../../lib/validation/contact-schemas';

interface ContactConfirmationProps {
  formData: ContactFormData;
  submissionId: string;
  submittedAt: string;
}

export const ContactConfirmationEmail: React.FC<ContactConfirmationProps> = ({
  formData,
  submissionId,
  submittedAt,
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' as const }}>
        <img 
          src="https://your-domain.com/logo.png" 
          alt="Sattuni Logo" 
          style={{ height: '60px', marginBottom: '10px' }}
        />
        <h1 style={{ color: '#2c3e50', margin: '0' }}>Vielen Dank für Ihre Anfrage!</h1>
      </div>

      {/* Main Content */}
      <div style={{ padding: '30px 20px', backgroundColor: '#ffffff' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
          Liebe/r {formData.name},
        </p>
        
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
          vielen Dank für Ihre Kontaktaufnahme! Wir haben Ihre Nachricht erfolgreich erhalten 
          und werden uns schnellstmöglich bei Ihnen melden.
        </p>

        {/* Submission Details */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px', 
          margin: '20px 0' 
        }}>
          <h3 style={{ color: '#2c3e50', marginTop: '0' }}>Ihre Anfrage im Überblick:</h3>
          <p><strong>Referenznummer:</strong> {submissionId}</p>
          <p><strong>Eingegangen am:</strong> {new Date(submittedAt).toLocaleString('de-DE')}</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>E-Mail:</strong> {formData.email}</p>
          {formData.phone && <p><strong>Telefon:</strong> {formData.phone}</p>}
          <p><strong>Nachricht:</strong><br />{formData.message}</p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
          <strong>Was passiert als Nächstes?</strong>
        </p>
        <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
          <li>Wir bearbeiten Ihre Anfrage innerhalb von 24 Stunden</li>
          <li>Sie erhalten eine persönliche Antwort von unserem Team</li>
          <li>Bei Fragen können Sie uns jederzeit kontaktieren</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div style={{ backgroundColor: '#2c3e50', color: '#ffffff', padding: '20px', textAlign: 'center' as const }}>
        <h3 style={{ margin: '0 0 15px 0' }}>Kontakt</h3>
        <p style={{ margin: '5px 0' }}>📧 info@sattuni.de</p>
        <p style={{ margin: '5px 0' }}>📞 +49 123 456789</p>
        <p style={{ margin: '5px 0' }}>📍 Musterstraße 123, 12345 Musterstadt</p>
      </div>

      {/* Footer */}
      <div style={{ padding: '20px', textAlign: 'center' as const, fontSize: '12px', color: '#666666' }}>
        <p>
          Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese E-Mail.
        </p>
        <p>
          © 2024 Sattuni - Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  );
};

// Function to render email as HTML string
export const renderContactConfirmationEmail = (props: ContactConfirmationProps): string => {
  // This would typically use a server-side rendering solution
  // For now, we provide the template structure
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bestätigung Ihrer Anfrage</title>
    </head>
    <body>
      <!-- The actual email HTML would be rendered here -->
      <!-- This is a placeholder for the server-side implementation -->
    </body>
    </html>
  `;
};