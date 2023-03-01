import { z } from "zod";
import { returnUserSchema, userSchema } from "../schemas/users.schemas";

export type IUser = z.infer<typeof userSchema>;
export type IUserReturn = z.infer<typeof returnUserSchema>;
