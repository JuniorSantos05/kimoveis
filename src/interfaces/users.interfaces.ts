import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  returnListUserSchema,
  returnUserSchema,
  userSchema,
} from "../schemas/users.schemas";

export type IUser = z.infer<typeof userSchema>;
export type IUserReturn = z.infer<typeof returnUserSchema>;
export type IUsersReturn = z.infer<typeof returnListUserSchema>;
export type IUserUpdate = DeepPartial<IUser>;
