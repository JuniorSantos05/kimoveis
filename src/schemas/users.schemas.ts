import { z } from "zod";
import { hashSync } from "bcryptjs";

export const userSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().min(8).max(45),
  admin: z.boolean().default(false),
  password: z
    .string()
    .min(4)
    .max(20)
    .transform((pass) => {
      return hashSync(pass, 10);
    }),
});

export const userUpdateSchema = userSchema.partial();

export const returnUserSchema = userSchema
  .extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
  })
  .omit({ password: true });

export const returnListUserSchema = returnUserSchema.array();
