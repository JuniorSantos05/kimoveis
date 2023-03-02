import { Request, Response } from "express";
import { ICategory } from "../interfaces/category.interfaces";
import { createCategoryServices } from "../services/categories/createCategoryServices";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryData: ICategory = req.body;

  const newCategory = await createCategoryServices(categoryData);

  return res.status(201).json(newCategory);
};
