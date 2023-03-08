import { z } from "zod";
import { addressSchema } from "./address.schema";
import { categorySchema, returnCategorySchema } from "./category.schemas";

export const realEstateSchema = z.object({
    value: z.number().or(z.string()),
    size: z.number().int().positive(),
    address: addressSchema,
    categoryId: z.number().optional()

})

const addressSchemaResult = addressSchema.extend({ id: z.number() })

export const realEstateSchemaResult = realEstateSchema.extend({
    id: z.number(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: addressSchemaResult,
    category: returnCategorySchema

})

export const realEstateSchemaReturn = z.object({
    id: z.number(),
    sold: z.boolean(),
    value: z.number().or(z.string()),
    size: z.number().int().positive(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: addressSchemaResult,
    category: categorySchema,
  }); 

export const returnListRealEstateSchema = realEstateSchemaResult.omit({categoryId:true}).array();





