import { Request, Response } from "express";
import { ICategory } from "../interfaces/category.interfaces";
import { createCategoryServices } from "../services/categories/createCategoryServices";
import { listCategoriesServices } from "../services/categories/listCategoriesServices";
import { listCategoryAndRealEstateServices } from "../services/categories/listCategoryAndRealEstatesServices";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

  const categoryData: ICategory = req.body;

  const newCategory = await createCategoryServices(categoryData);

  return res.status(201).json(newCategory);

};


export const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {

  const categories = await listCategoriesServices();

  return res.json(categories);
  
};

export const listCategoriesAndRealEstatesController = async (req: Request, res: Response): Promise<Response> => {

  const categoryId = parseInt(req.params.id)

  const realEstateByCategory = await listCategoryAndRealEstateServices(categoryId)

  return res.json(realEstateByCategory);
  
};
