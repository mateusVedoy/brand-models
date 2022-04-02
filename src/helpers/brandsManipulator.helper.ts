
class BrandsManipulator {

    private brandSortHelper(brands) {
        return brands.sort((pre, pos) => pos.models.length - pre.models.length);
    }

    private brandsManipulatorResponseModel(brand, nbrOfModels) {
        return {
            'brand': brand,
            'number of models': nbrOfModels
        }
    }

    private brandListByAmmountHelper(brands, ammount, reverse?:Boolean) {
        let brandsAndModels;
        let brandListArr = [];
        if(reverse){
            brandsAndModels = this.brandSortHelper(brands).reverse();
        }else{
            brandsAndModels = this.brandSortHelper(brands)
        }
        brandsAndModels.slice(0, ammount).forEach(({ brand, models }) => {
            brandListArr.push(this.brandsManipulatorResponseModel(brand, models.length));
        });
        return brandListArr;
    }

    public brandWithMoreModelsHelper(brands) {
        let sizeOf = 0;
        let modelsBrands = [];
        this.brandSortHelper(brands).forEach(({ brand, models }) => {
            if (models.length > sizeOf) {
                sizeOf = models.length;
                modelsBrands.push(this.brandsManipulatorResponseModel(brand, models.length));
            } else if (models.length == sizeOf) {
                modelsBrands.push(this.brandsManipulatorResponseModel(brand, models.length));
            }
        });
        return modelsBrands;
    };

    public brandWithLessModelsHelper(brands) {
        let modelsBrands = [];
        this.brandSortHelper(brands).reverse();
        let sizeOf = brands[0].models.length;
        brands.forEach(({ brand, models }) => {
            if (models.length < sizeOf) {
                sizeOf = models.length;
                modelsBrands.push(this.brandsManipulatorResponseModel(brand, models.length));
            } else if (models.length == sizeOf) {
                modelsBrands.push(this.brandsManipulatorResponseModel(brand, models.length));
            }
        });
        return modelsBrands;
    }

    public brandListWithMoreModelsByAmmountHelper(ammount, brands) {
        return this.brandListByAmmountHelper(brands, ammount, false);
    }

    public brandListWithLessModelsByAmmountHelper(ammount, brands) {
        return this.brandListByAmmountHelper(brands, ammount, true);
    }
};

export { BrandsManipulator };