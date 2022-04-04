import { Router } from "express";
import { BrandsController } from "../controllers/brands.controller";

const brandsController = new BrandsController;

const brandsRouter = Router();

brandsRouter.get("/brands/more-models", brandsController.getBrandWithMoreModelsController);
brandsRouter.get("/brands/less-models", brandsController.getBrandWithLessModelsController);
brandsRouter.get("/brands/more-models-list", brandsController.
getBrandListWithMoreModelsByAmmounController);
brandsRouter.get("/brands/less-models-list", brandsController.
getBrandListWithLessModelsByAmmounController);
brandsRouter.get("/brands/search-models", brandsController.
getBrandModelsByBrandNameController);

export { brandsRouter };

