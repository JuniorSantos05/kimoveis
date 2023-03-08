import { Request, Response } from "express";
import { IRealEstate } from "../interfaces/realEstate.interfaces";
import { createRealEstateServices } from "../services/realEstate/createRealEstateServices";
import { listRealEstatesServices } from "../services/realEstate/listRealEstateServices";

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {

  const realEstateData: IRealEstate = req.body;

  const newRealEstate = await createRealEstateServices(realEstateData)

  return res.status(201).json(newRealEstate);
  
};

export const listRealEstateController = async (req: Request, res: Response): Promise<Response> => {

  const realEstates = await listRealEstatesServices()

  return res.json(realEstates);
  
};




