import { z } from "zod";

// Base contact validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
});

// Catering form validation schema
export const cateringFormSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich"),
  company: z.string().optional(),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(10, "Telefonnummer ist erforderlich"),
  address: z.string().min(5, "Adresse ist erforderlich"),
  occasion: z.string().min(1, "Anlass ist erforderlich"),
  date: z.string().min(1, "Datum ist erforderlich"),
  guestCount: z.number().min(1, "Anzahl Gäste muss mindestens 1 sein").optional(),
  budget: z.number().min(0, "Budget muss positiv sein").optional(),
  comment: z.string().optional(),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CateringFormData = z.infer<typeof cateringFormSchema>;

// Validation helper functions
export const validateContactForm = (data: unknown) => {
  return contactFormSchema.safeParse(data);
};

export const validateCateringForm = (data: unknown) => {
  return cateringFormSchema.safeParse(data);
};