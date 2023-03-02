import { Request, Response } from "express";
import { IUser, IUserUpdate } from "../interfaces/users.interfaces";
import { createUserServices } from "../services/users/createUserServices";
import deleteUserService from "../services/users/deleteUserServices";
import { listUserServices } from "../services/users/listUserServices";
import { updateUserService } from "../services/users/updateUserServices";

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

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = parseInt(req.params.id);
  const userData: IUserUpdate = req.body;

  const updateUser = await updateUserService(userData, userId);
  return res.status(200).json(updateUser);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};
