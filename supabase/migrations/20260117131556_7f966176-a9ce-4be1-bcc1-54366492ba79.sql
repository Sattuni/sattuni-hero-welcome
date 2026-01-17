-- RLS Policy for catering_inquiries table
-- The table stores sensitive customer data and should only be:
-- 1. INSERT-able by public (for form submissions from edge function using service role)
-- 2. SELECT/UPDATE/DELETE-able by authenticated admin users

-- Since this app uses edge functions with service role key for inserts,
-- and there's no admin authentication system yet, we'll create a policy
-- that allows the edge function to insert (via service role) and denies public access.

-- Policy: Allow INSERT for the edge function (service role bypasses RLS anyway)
-- But we need at least one policy to avoid "no policies" warning
-- Service role key bypasses RLS, so this is for the anon key

-- For now, create a restrictive policy that:
-- 1. Denies public SELECT (protects customer data)
-- 2. Denies public INSERT (edge function uses service role, bypasses RLS)
-- 3. Denies public UPDATE/DELETE

-- Create policy that denies all public access
-- The edge function uses service_role key which bypasses RLS
CREATE POLICY "Deny public read access to protect customer data"
  ON public.catering_inquiries
  FOR SELECT
  USING (false);

CREATE POLICY "Deny public insert - use edge function instead"
  ON public.catering_inquiries
  FOR INSERT
  WITH CHECK (false);

CREATE POLICY "Deny public update access"
  ON public.catering_inquiries
  FOR UPDATE
  USING (false);

CREATE POLICY "Deny public delete access"
  ON public.catering_inquiries
  FOR DELETE
  USING (false);