import { z } from "zod";
import { realEstateSchemaResult } from "./realEstate.schemas";

export const categorySchema = z.object({
  name: z.string().min(3).max(45),
});

export const returnCategorySchema = categorySchema.extend({
  id: z.number(),
});

export const returnRealEstateByCategorySchema = returnCategorySchema.extend({
  realEstate: realEstateSchemaResult.omit({address:true}).array(),
});

export const returnListCategorySchema = returnCategorySchema.array();
export const returnListRealEstateByCategorySchema = returnRealEstateByCategorySchema.array();

