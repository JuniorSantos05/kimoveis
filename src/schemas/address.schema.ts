import { z } from "zod";

export const addressSchema = z.object({
    street: z.string(),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullable().optional(),
    city: z.string(),
    state: z.string().min(2).max(2),
  });

  





  