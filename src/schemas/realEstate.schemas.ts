import { z } from "zod";
import { addressSchema } from "./address.schema";
import { returnCategorySchema } from "./category.schemas";

export const realEstateSchema = z.object({
    value: z.number().or(z.string()),
    size: z.number().int().positive(),
    address: addressSchema,
    categoryId: z.number().optional()

})

const addressSchemaResult = addressSchema.extend({ id: z.number() })

export const realEstateSchemaResult = z.object({
    value: z.string(),
    size: z.number(),
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
    sold: z.boolean().default(false),
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
  });

export const returnListRealEstateSchema = realEstateSchemaResult.array();









