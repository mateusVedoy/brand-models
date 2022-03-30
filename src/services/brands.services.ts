import axios from "axios";

class BrandsServices {
    async getBrandService() {
        const brands = await axios.get("http://localhost:3000/brands");
        console.log(brands);
        return brands;
    };
};

export { BrandsServices };