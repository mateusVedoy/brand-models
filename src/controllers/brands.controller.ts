import { Response } from "express"
import { BrandsServices } from "../services/brands.services";

const brandsServices = new BrandsServices;

class BrandsController {
    async getBrandWithMoreModelsController (_, response: Response) {
        const brandsList = await brandsServices.getBrandService();
        console.log(brandsList)
        return response.send(brandsList);
    }
};

export { BrandsController }