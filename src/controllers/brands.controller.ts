import { Request, Response } from "express"
import { BrandsServices } from "../services/brands.services";
import { BrandsManipulator } from "../helpers/brandsManipulator.helper";

const brandsManipulator = new BrandsManipulator;
const brandsServices = new BrandsServices;

class BrandsController {
    public async getBrandWithMoreModelsController(_, response: Response): Promise<Response> {
        const brandsList = await brandsServices.getBrandService();
        const mordeModelsBrands = brandsManipulator.brandWithMoreModelsHelper(brandsList);
        return response.send(mordeModelsBrands);
    };

    public async getBrandWithLessModelsController(_, response: Response): Promise<Response> {
        const brandsList = await brandsServices.getBrandService();
        const lessModelsBrands = brandsManipulator.brandWithLessModelsHelper(brandsList);
        return response.send(lessModelsBrands);
    };

    public async getBrandListWithMoreModelsByAmmounController(request: Request, response: Response): Promise<Response> {
        let { ammount } = request.query;
        const brandsList = await brandsServices.getBrandService();
        const moreModelsByAmmount = brandsManipulator.brandListWithMoreModelsByAmmountHelper(ammount, brandsList);
        return response.send(moreModelsByAmmount);
    }
};

export { BrandsController }