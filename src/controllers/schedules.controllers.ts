import { Request, Response } from "express";
import { ISchedulesRequest } from "../interfaces/schedules.interfaces";
import { createShedulesServices } from "../services/schedules/createShedulesServices";
import { listSchedulesRealEstatesServices } from "../services/schedules/listSchedulesRealEstatesServices";


export const createShedulesController = async (req: Request, res: Response): Promise<Response> => {

    const shedulesData: ISchedulesRequest = req.body;
    const userId: number = req.user.id 
  
    await createShedulesServices(shedulesData, userId);
  
    return res.status(201).json({ message: 'Schedule created' });
  
  };

  export const listShedulesRealEstatesController = async (req: Request, res: Response): Promise<Response> => {

    const realEstateId: number = parseInt(req.params.id) 
    const schedules = await listSchedulesRealEstatesServices(realEstateId)

    return res.json(schedules);

  }
