import { Response } from "express"
import { BrandsServices } from "../services/brands.services";
import { BrandsManipulator } from "../helpers/brandsManipulator.helper";

const brandsManipulator = new BrandsManipulator;
const brandsServices = new BrandsServices;

class BrandsController {
    async getBrandWithMoreModelsController (_, response: Response): Promise<Response> {
        const brandsList = await brandsServices.getBrandService();
        brandsManipulator.brandWithMoreModelsHelper(brandsList);
        return response.send(brandsList);
    }
};

export { BrandsController }