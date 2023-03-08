import { z } from "zod";

export const addressSchema = z.object({
    street: z.string(),
    zipCode: z.string().min(8).max(8),
    number: z.string().nullable().optional(),
    city: z.string(),
    state: z.string().min(2).max(2),
  });

  