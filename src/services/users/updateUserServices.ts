import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error/error";
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

export const updateUserService = async (userData: IUserUpdate, idUser: number): Promise<IUserReturn> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: idUser,
  });

  if (!oldUserData) {
    throw new AppError("User not found", 404);
  }

  const updatedUserData = {
    ...oldUserData,
    ...userData,
    admin: oldUserData.admin
  }; 

  await userRepository.save(updatedUserData);

  const updatedUser = returnUserSchema.parse(updatedUserData);

  return updatedUser;
  
};
