import { Response } from "express"
import { BrandsServices } from "../services/brands.services";

class BrandsController {
    private brandsServices = new BrandsServices;
    async getBrandWithMoreModelsController (_, response: Response) {
        const brandsList = await this.brandsServices.getBrandService();
        console.log(brandsList);
        return response.status(201);
    }
};

export { BrandsController }