import axios from "axios";

class BrandsServices {
    async getBrandService() {
        const { data } = await axios.get("http://localhost:3000/brands");
        return data;
    };
};

export { BrandsServices };
