import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../error/error";
import { IRealEstate, IRealEstateResult } from "../../interfaces/realEstate.interfaces";
import { realEstateSchemaResult } from "../../schemas/realEstate.schemas";

export const createRealEstateServices = async (realEstateData: IRealEstate) => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);
  
    const category = realEstateData.categoryId ? await categoryRepository.findOneBy({ id: realEstateData.categoryId }) : null;

    if (!category) {
      throw new AppError('Categoria não encontrada', 404);
    }

    const addressUnique = await addressRepository.findOne({
      where: { zipCode: realEstateData.address.zipCode },
    });
  
    if (addressUnique) {
      throw new AppError("Address already exists", 409);
    }
    
    const newAddress = addressRepository.create(realEstateData.address);
    await addressRepository.save(newAddress);   
  
    const realEstate = realEstateRepository.create({
      ...realEstateData,
      address: newAddress,
      category: category
    });        
    await realEstateRepository.save(realEstate);

    //const newRealEstate = realEstateSchemaResult.parse(realEstate); 
  
    return realEstate;
  };
  