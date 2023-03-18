import { z } from "zod";
import { addressSchema } from "./address.schema";

export const realEstateSchema = z.object({
    value: z.number().or(z.string()),
    size: z.number().int().positive(),
    address: addressSchema,
    categoryId: z.number().optional()

})

export const realEstateSchemaResult = z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value: z.string(),
    size: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: z.object({
      id: z.number(),
      street: z.string(),
      zipCode: z.string().max(8),
      number: z.string().max(7).nullable().optional(),
      city: z.string(),
      state: z.string().min(2).max(2),
    }),
    category: z.object({
      id: z.number(),
      name: z.string().min(3).max(45),
    }),    
  });










