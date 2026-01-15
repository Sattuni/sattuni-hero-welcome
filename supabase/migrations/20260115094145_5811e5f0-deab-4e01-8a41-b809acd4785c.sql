-- Tabelle für Catering-Anfragen (CRM Fundament)
CREATE TABLE public.catering_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  
  -- Kontaktdaten
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  
  -- Event-Details
  event_type TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_time TEXT,
  guest_count INTEGER NOT NULL,
  
  -- Menü-Auswahl
  menu_type TEXT NOT NULL,
  selected_package_name TEXT,
  selected_package_price TEXT,
  total_price TEXT,
  equipment_costs TEXT,
  
  -- Custom-Menü (falls zutreffend)
  custom_appetizers TEXT,
  custom_main_courses TEXT,
  custom_side_dishes TEXT,
  custom_desserts TEXT,
  
  -- Equipment
  equipment_chafings BOOLEAN DEFAULT false,
  equipment_besteck BOOLEAN DEFAULT false,
  equipment_teller BOOLEAN DEFAULT false,
  equipment_schalen BOOLEAN DEFAULT false,
  
  -- Anmerkungen
  comment TEXT,
  
  -- CRM-Felder
  status TEXT DEFAULT 'pending' NOT NULL,
  followup_sent_at TIMESTAMPTZ,
  admin_notes TEXT,
  
  -- Metadaten
  source TEXT DEFAULT 'website',
  ip_address TEXT
);

-- Index für effiziente Follow-up Abfragen
CREATE INDEX idx_inquiries_followup ON public.catering_inquiries (created_at, followup_sent_at, status);

-- Index für E-Mail-Suche
CREATE INDEX idx_inquiries_email ON public.catering_inquiries (email);

-- RLS aktivieren
ALTER TABLE public.catering_inquiries ENABLE ROW LEVEL SECURITY;

-- Keine öffentlichen Policies - nur Service Role kann zugreifen (Edge Functions)
-- Das ist sicher, da alle Schreibvorgänge über Edge Functions mit Service Role Key laufen