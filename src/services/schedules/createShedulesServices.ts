import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../error/error";
import { ISchedulesRequest } from "../../interfaces/schedules.interfaces";

export const createShedulesServices = async (scheduleData:ISchedulesRequest,  userId: number) => {
    
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const realEstate = await realEstateRepository.findOne({
        where: { id: scheduleData.realEstateId }
    });
    if (!realEstate) {
        throw new AppError("RealEstate not found", 404);
    }

    const user = await userRepository.findOne({
        where: { id: userId }
    });
    if (!user) {
        throw new AppError("User not found", 404);
    }

    const existingSchedule = await AppDataSource.createQueryBuilder(Schedule, "schedule")
        .where("schedule.date = :date AND schedule.hour = :hour", { date: scheduleData.date, hour: scheduleData.hour })
        .andWhere("schedule.realEstate = :realEstateId", { realEstateId: scheduleData.realEstateId })
        .getOne();

    if (existingSchedule) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409);
    }

    const existingScheduleForUser = await AppDataSource.createQueryBuilder(Schedule, "schedule")
        .where("schedule.date = :date AND schedule.hour = :hour", { date: scheduleData.date, hour: scheduleData.hour })
        .andWhere("schedule.user = :userId", { userId })
        .getOne();

    if (existingScheduleForUser) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409);
    }

    const hour = Number(scheduleData.hour.split(':')[0]);

    if (hour < 8 || hour > 17) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
    }

    const date = new Date(scheduleData.date);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        throw new AppError("Invalid date, work days are monday to friday", 400);
    }

    const newSchedule = scheduleRepository.create({
        ...scheduleData,
        realEstate,
        user
    });

    await scheduleRepository.save(newSchedule);

    return newSchedule;
};
