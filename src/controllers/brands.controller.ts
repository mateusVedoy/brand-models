import { Response } from "express"
import { BrandsServices } from "../services/brands.services";
import { BrandsManipulator } from "../helpers/brandsManipulator.helper";

const brandsManipulator = new BrandsManipulator;
const brandsServices = new BrandsServices;

class BrandsController {
    public async getBrandWithMoreModelsController (_, response: Response): Promise<Response> {
        const brandsList = await brandsServices.getBrandService();
        const mordeModelsBrands = brandsManipulator.brandWithMoreModelsHelper(brandsList);
        return response.send(mordeModelsBrands);
    }
    public async getBrandWithLessModelsController(_, response:Response): Promise<Response>{
        const brandsList = await brandsServices.getBrandService();
        const lessModelsBrands = brandsManipulator.brandWithLessModelsHelper(brandsList);
        return response.send(lessModelsBrands);
    }
};

export { BrandsController }