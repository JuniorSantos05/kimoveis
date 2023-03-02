import { z } from "zod";
import {
  categorySchema,
  returnCategorySchema,
} from "../schemas/category.schemas";

export type ICategory = z.infer<typeof categorySchema>;
export type ICategoryResult = z.infer<typeof returnCategorySchema>;
