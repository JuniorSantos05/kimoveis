import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../error/error";


export const listSchedulesRealEstatesServices = async ( realEstateId: number) => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstate = await realEstateRepository.findOne({
        where: { id: realEstateId }
    });

    if (!realEstate) {
        throw new AppError("RealEstate not found", 404);
    }

    const schedules = await AppDataSource.createQueryBuilder(RealEstate, "realEstate")
    .leftJoinAndSelect("realEstate.address", "address")
    .leftJoinAndSelect("realEstate.category", "category")
    .leftJoinAndSelect("realEstate.schedules", "schedules")
    .leftJoinAndSelect("schedules.user", "user")
    .where("realEstate.id = :realEstateId", { realEstateId })
    .getOne();

    return schedules

}
