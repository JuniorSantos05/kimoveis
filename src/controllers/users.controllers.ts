import { Request, Response } from "express";
import { IUser } from "../interfaces/users.interfaces";
import { createUserServices } from "../services/users/createUserServices";
import { listUserServices } from "../services/users/listUserServices";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IUser = req.body;

  const newUser = await createUserServices(userData);
  return res.status(201).json(newUser);
};

export const listUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUserServices();
  return res.json(users);
};
