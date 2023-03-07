import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../error/error";
import { IListRealEstateByCategoriesResult } from "../../interfaces/category.interfaces";
import { returnRealEstateByCategorySchema } from "../../schemas/category.schemas";

export const listCategoryAndRealEstateServices = async (categoryId: number): Promise<IListRealEstateByCategoriesResult> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);
  
    const category: Category | null = await categoryRepository.findOne({ 
        where: { id: categoryId },
        relations: { realEstate: true }
    }); 

    if (!category) {
        throw new AppError("Category not found", 404);
      }
       
    const result = await returnRealEstateByCategorySchema.parse(category);
  
    return result;
  };