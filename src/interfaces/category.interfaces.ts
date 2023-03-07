import { z } from "zod";
import { categorySchema, returnCategorySchema, returnListCategorySchema, returnListRealEstateByCategorySchema, returnRealEstateByCategorySchema } from "../schemas/category.schemas";

export type ICategory = z.infer<typeof categorySchema>;
export type ICategoryResult = z.infer<typeof returnCategorySchema>;
export type IListCategoriesResult = z.infer<typeof returnListCategorySchema>;
export type IListRealEstateByCategoriesResult = z.infer<typeof returnRealEstateByCategorySchema>;

