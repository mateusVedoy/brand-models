
class BrandsManipulator {

    private brandSortHelper(brands){
        return brands.sort((pre, pos) => pos.models.length - pre.models.length);
    }

    private brandsManipulatorResponseModel(brand, nbrOfModels){
        return {
            'brand':brand,
            'number of models': nbrOfModels
        }
    }

    public brandWithMoreModelsHelper(brands) {
        let sizeOf = 0;
        let modelsBrands = [];
        this.brandSortHelper(brands).forEach(brand => {
            if(brand.models.length > sizeOf) {
                sizeOf = brand.models.length;
                modelsBrands.push(this.brandsManipulatorResponseModel(brand.brand, brand.models.length));
            }else if(brand.models.length == sizeOf){
                modelsBrands.push(this.brandsManipulatorResponseModel(brand.brand, brand.models.length));
            }
        });
        return modelsBrands;
    };
    public brandWithLessModelsHelper(brands){
        let modelsBrands = [];
        this.brandSortHelper(brands).reverse();
        let sizeOf = brands[0].models.length;
        brands.forEach(brand => {
            if(brand.models.length < sizeOf) {
                sizeOf = brand.models.length;
                modelsBrands.push(this.brandsManipulatorResponseModel(brand.brand, brand.models.length));
            }else if(brand.models.length == sizeOf){
                modelsBrands.push(this.brandsManipulatorResponseModel(brand.brand, brand.models.length));
            }
        });
        return modelsBrands;
    }
};

export { BrandsManipulator };