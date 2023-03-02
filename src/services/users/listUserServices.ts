import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUsersReturn } from "../../interfaces/users.interfaces";
import { returnListUserSchema } from "../../schemas/users.schemas";

export const listUserServices = async (): Promise<IUsersReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers: Array<User> = await userRepository.find();

  const users = returnListUserSchema.parse(findUsers);

  return users;
};
