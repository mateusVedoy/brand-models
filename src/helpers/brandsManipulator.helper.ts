
class BrandsManipulator {

    private brandSortHelper(brands) {
        return brands.sort((pre, pos) => pos.models.length - pre.models.length);
    }

    private brandsResponseModelHelper(brands) {
        let brandsModel = [];
        brands.forEach(({brand, models}) => {
            brandsModel.push({
                'brand': brand,
                'number of models': models.length
            });
        });        
        return brandsModel;
    }

    private brandListByAmmountHelper(brands, ammount, reverse?:Boolean) {
        let brandsAndModels;
        let brandListArr = [];
        if(reverse){
            brandsAndModels = this.brandSortHelper(brands).reverse();
        }else{
            brandsAndModels = this.brandSortHelper(brands)
        }
        // brandsAndModels.slice(0, ammount).forEach(({ brand, models }) => {
        //     brandListArr.push(this.brandsManipulatorResponseModel(brand, models.length));
        // });
        // return brandListArr;
        return brandsAndModels.slice(0, ammount);
    }

    private orderBrandsByAlphabeticalHelper(brands){
        brands.sort((pre, pos) => {
            if((pre.models.length == pos.models.length) && (pre.brand < pos.brand)){
                return -1;
            }else if((pre.models.length == pos.models.length) && (pre.brand > pos.brand)){
                return 1
            }else {
                return 0
            }
        });

        return brands;
    }

    public brandWithMoreModelsHelper(brands) {
        let sizeOf = 0;
        let modelsBrands = [];
        this.brandSortHelper(brands).forEach(({ brand, models }) => {
            if (models.length > sizeOf) {
                sizeOf = models.length;
                modelsBrands.push(this.brandsResponseModelHelper(brand, models.length));
            } else if (models.length == sizeOf) {
                modelsBrands.push(this.brandsResponseModelHelper(brand, models.length));
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
                modelsBrands.push(this.brandsResponseModelHelper(brand, models.length));
            } else if (models.length == sizeOf) {
                modelsBrands.push(this.brandsResponseModelHelper(brand, models.length));
            }
        });
        return modelsBrands;
    }

    public brandListWithMoreModelsByAmmountHelper(ammount, brands) {
        let brandList = this.brandListByAmmountHelper(brands, ammount, false);
        let brandListByAlphabetical = this.orderBrandsByAlphabeticalHelper(brandList);
        return this.brandsResponseModelHelper(brandListByAlphabetical);
    }

    public brandListWithLessModelsByAmmountHelper(ammount, brands) {
        let brandList = this.brandListByAmmountHelper(brands, ammount, true);
        let brandListByAlphabetical = this.orderBrandsByAlphabeticalHelper(brandList);
        return this.brandsResponseModelHelper(brandListByAlphabetical);
    }
};

export { BrandsManipulator };