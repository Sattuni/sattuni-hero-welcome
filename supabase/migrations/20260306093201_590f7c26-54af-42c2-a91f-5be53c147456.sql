CREATE TABLE public.partner_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT DEFAULT '',
  email TEXT NOT NULL,
  comment TEXT DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.partner_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON public.partner_inquiries
  FOR INSERT TO anon WITH CHECK (true);
