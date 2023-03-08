import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../error/error";
import { ICategory, ICategoryResult } from "../../interfaces/category.interfaces";
import { returnCategorySchema } from "../../schemas/category.schemas";

export const createCategoryServices = async (categoryData: ICategory): Promise<ICategoryResult> => {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOne({
    where: { name: categoryData.name },
  });

  if (findCategory) {
    throw new AppError("Category already exists", 409);
  }

  const category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  const newCategory = returnCategorySchema.parse(category);

  return newCategory;
};
