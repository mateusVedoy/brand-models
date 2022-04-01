import axios from "axios";

class BrandsServices {
    async getBrandService() {
        try {
            const { data } = await axios.get("http://localhost:3000/brands");
            return data;
        } catch (error) {
            throw error;
        }
    };
};

export { BrandsServices };
