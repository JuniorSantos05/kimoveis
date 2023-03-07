import { Request, Response } from "express";
import { ILogin } from "../interfaces/login.interfaces";
import { createLoginServices } from "../services/login/createLoginServices";

export const createLoginController = async (req: Request, res: Response): Promise<Response> => {

  const loginData: ILogin = req.body;

  const token = await createLoginServices(loginData);

  return res.json({ token: token });
  
};
