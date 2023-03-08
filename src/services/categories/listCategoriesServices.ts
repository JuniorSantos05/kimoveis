import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { IListCategoriesResult } from "../../interfaces/category.interfaces";
import { returnListCategorySchema } from "../../schemas/category.schemas";

export const listCategoriesServices = async (): Promise<IListCategoriesResult> => {
    
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const findCategories: Array<Category> = await categoryRepository.find();

    const categories = await returnListCategorySchema.parse(findCategories);

    return categories;
  };
