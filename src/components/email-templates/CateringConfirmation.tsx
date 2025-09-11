import React from 'react';
import { CateringFormData } from '../../lib/validation/contact-schemas';

interface CateringConfirmationProps {
  formData: CateringFormData;
  submissionId: string;
  submittedAt: string;
}

export const CateringConfirmationEmail: React.FC<CateringConfirmationProps> = ({
  formData,
  submissionId,
  submittedAt,
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '30px 20px', 
        textAlign: 'center' as const,
        color: '#ffffff'
      }}>
        <img 
          src="https://your-domain.com/logo-white.png" 
          alt="Sattuni Logo" 
          style={{ height: '60px', marginBottom: '15px' }}
        />
        <h1 style={{ margin: '0', fontSize: '28px' }}>Ihre Catering-Anfrage ist eingegangen!</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '16px', opacity: '0.9' }}>
          Wir freuen uns auf Ihr Event!
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: '30px 20px', backgroundColor: '#ffffff' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
          Liebe/r {formData.name},
        </p>
        
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333333' }}>
          vielen Dank für Ihr Interesse an unseren Catering-Services! Wir haben Ihre Anfrage 
          erfolgreich erhalten und werden uns innerhalb der nächsten 24 Stunden mit einem 
          personalisierten Angebot bei Ihnen melden.
        </p>

        {/* Event Details */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '25px', 
          borderRadius: '10px', 
          margin: '25px 0',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ color: '#2c3e50', marginTop: '0', marginBottom: '20px' }}>
            📋 Ihre Event-Details
          </h3>
          
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e9ecef', paddingBottom: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#495057' }}>Referenznummer:</span>
              <span style={{ color: '#6c757d' }}>{submissionId}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e9ecef', paddingBottom: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#495057' }}>Eingegangen am:</span>
              <span style={{ color: '#6c757d' }}>{new Date(submittedAt).toLocaleString('de-DE')}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e9ecef', paddingBottom: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#495057' }}>Anlass:</span>
              <span style={{ color: '#6c757d' }}>{formData.occasion}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e9ecef', paddingBottom: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#495057' }}>Datum:</span>
              <span style={{ color: '#6c757d' }}>{formData.date}</span>
            </div>
            
            {formData.guestCount && (
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e9ecef', paddingBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#495057' }}>Anzahl Gäste:</span>
                <span style={{ color: '#6c757d' }}>{formData.guestCount}</span>
              </div>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e9ecef', paddingBottom: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#495057' }}>Adresse:</span>
              <span style={{ color: '#6c757d' }}>{formData.address}</span>
            </div>
            
            {formData.company && (
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e9ecef', paddingBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#495057' }}>Unternehmen:</span>
                <span style={{ color: '#6c757d' }}>{formData.company}</span>
              </div>
            )}
          </div>
        </div>

        {/* Contact Details */}
        <div style={{ 
          backgroundColor: '#e8f4f8', 
          padding: '20px', 
          borderRadius: '10px', 
          margin: '20px 0' 
        }}>
          <h4 style={{ color: '#2c3e50', marginTop: '0' }}>👤 Kontaktdaten</h4>
          <p style={{ margin: '5px 0' }}><strong>Name:</strong> {formData.name}</p>
          <p style={{ margin: '5px 0' }}><strong>E-Mail:</strong> {formData.email}</p>
          <p style={{ margin: '5px 0' }}><strong>Telefon:</strong> {formData.phone}</p>
        </div>

        {formData.comment && (
          <div style={{ 
            backgroundColor: '#fff3cd', 
            padding: '20px', 
            borderRadius: '10px', 
            margin: '20px 0',
            border: '1px solid #ffeaa7'
          }}>
            <h4 style={{ color: '#2c3e50', marginTop: '0' }}>💬 Ihre Nachricht</h4>
            <p style={{ margin: '0', fontStyle: 'italic', color: '#6c757d' }}>"{formData.comment}"</p>
          </div>
        )}

        {/* Next Steps */}
        <div style={{ 
          backgroundColor: '#d1ecf1', 
          padding: '25px', 
          borderRadius: '10px', 
          margin: '25px 0',
          border: '1px solid #bee5eb'
        }}>
          <h3 style={{ color: '#0c5460', marginTop: '0' }}>🚀 So geht es weiter</h3>
          <ol style={{ fontSize: '16px', lineHeight: '1.8', color: '#0c5460', paddingLeft: '20px' }}>
            <li><strong>Bearbeitung:</strong> Wir prüfen Ihre Anfrage und erstellen ein maßgeschneidertes Angebot</li>
            <li><strong>Kontaktaufnahme:</strong> Unser Catering-Team meldet sich innerhalb von 24 Stunden bei Ihnen</li>
            <li><strong>Beratung:</strong> Gemeinsam besprechen wir alle Details für Ihr perfektes Event</li>
            <li><strong>Bestätigung:</strong> Nach Ihrer Zusage planen wir alles bis ins Detail</li>
          </ol>
        </div>
      </div>

      {/* Contact Info */}
      <div style={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: '#ffffff', 
        padding: '30px 20px', 
        textAlign: 'center' as const
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '22px' }}>📞 Direkter Kontakt</h3>
        <div style={{ display: 'grid', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
          <p style={{ margin: '0', fontSize: '16px' }}>📧 catering@sattuni.de</p>
          <p style={{ margin: '0', fontSize: '16px' }}>📞 +49 123 456789</p>
          <p style={{ margin: '0', fontSize: '16px' }}>💬 WhatsApp: +49 123 456789</p>
        </div>
        <p style={{ margin: '20px 0 0 0', fontSize: '14px', opacity: '0.8' }}>
          Haben Sie Fragen? Rufen Sie uns gerne direkt an!
        </p>
      </div>

      {/* Footer */}
      <div style={{ 
        padding: '25px 20px', 
        textAlign: 'center' as const, 
        fontSize: '12px', 
        color: '#6c757d',
        backgroundColor: '#f8f9fa'
      }}>
        <p style={{ margin: '0 0 10px 0' }}>
          Diese E-Mail wurde automatisch generiert. Bei Rückfragen antworten Sie bitte direkt auf diese E-Mail.
        </p>
        <p style={{ margin: '0' }}>
          © 2024 Sattuni Catering - Ihr Partner für unvergessliche Events
        </p>
      </div>
    </div>
  );
};

// Function to render email as HTML string
export const renderCateringConfirmationEmail = (props: CateringConfirmationProps): string => {
  // This would typically use a server-side rendering solution
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bestätigung Ihrer Catering-Anfrage</title>
    </head>
    <body>
      <!-- The actual email HTML would be rendered here -->
      <!-- This is a placeholder for the server-side implementation -->
    </body>
    </html>
  `;
};