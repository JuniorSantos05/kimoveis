import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { IListRealEstateByCategoriesResult } from "../../interfaces/category.interfaces";
import { returnRealEstateByCategorySchema } from "../../schemas/category.schemas";

export const listCategoryAndRealEstateServices = async (categoryId: number): Promise<IListRealEstateByCategoriesResult> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);
  
    const category = await categoryRepository.findOne({ 
        where: { id: categoryId },
        relations: { realEstates: true }
    });  
   
    const result = await returnRealEstateByCategorySchema.parse(category);
  
    return result;
  };