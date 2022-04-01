import { Router } from "express";
import { BrandsController } from "../controllers/brands.controller";

const brandsController = new BrandsController;

const brandsRouter = Router();

brandsRouter.get("/brands/more-models", brandsController.getBrandWithMoreModelsController);
brandsRouter.get("/brands/less-models", brandsController.getBrandWithLessModelsController);

export { brandsRouter };

