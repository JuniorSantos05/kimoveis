import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().min(4).max(20),
});

export const updateUserSchema = userSchema.partial().omit({ admin:true });

export const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({ password: true });

export const returnListUserSchema = returnUserSchema.array();
