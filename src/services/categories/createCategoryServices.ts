import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  ICategory,
  ICategoryResult,
} from "../../interfaces/category.interfaces";
import { returnCategorySchema } from "../../schemas/category.schemas";

export const createCategoryServices = async (
  categoryData: ICategory
): Promise<ICategoryResult> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  const newCategory = returnCategorySchema.parse(category);

  return newCategory;
};
