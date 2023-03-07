import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { IListRealEstatesResult } from "../../interfaces/realEstate.interfaces";
import { returnListRealEstateSchema } from "../../schemas/realEstate.schemas";

export const listRealEstatesServices = async (): Promise<IListRealEstatesResult> => {
    
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const findRealEstates: Array<RealEstate> = await realEstateRepository.find({
        relations:{ address:true }
    });

    const realEstates = await returnListRealEstateSchema.parse(findRealEstates);

    return realEstates;
  };