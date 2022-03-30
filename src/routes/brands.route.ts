import { Router } from "express";
import { BrandsController } from "../controllers/brands.controller";

const brandsController = new BrandsController;

const brandsRouter = Router();

brandsRouter.get("/brands/more-models", brandsController.getBrandWithMoreModelsController);

export { brandsRouter };

