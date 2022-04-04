
class BrandsManipulator {

    private brandSortHelper(brands) {
        return brands.sort((pre, pos) => pos.models.length - pre.models.length);
    }

    private brandsResponseModelHelper(brands) {
        let brandList = [];
        brands.forEach(({brand, models}) => {
            brandList.push ({
                'brand': brand,
                'number of models': models.length
            });
        });
        return brandList;
    }

    private brandListByAmmountHelper(brands, ammount, reverse?: Boolean) {
        let brandsAndModels;
        if (reverse) {
            brandsAndModels = this.brandSortHelper(brands).reverse();
        } else {
            brandsAndModels = this.brandSortHelper(brands)
        }
        return brandsAndModels.slice(0, ammount);
    }

    private orderBrandsByAlphabeticalHelper(brands) {
        brands.sort((pre, pos) => {
            if ((pre.models.length == pos.models.length) && (pre.brand < pos.brand)) {
                return -1;
            } else if ((pre.models.length == pos.models.length) && (pre.brand > pos.brand)) {
                return 1
            } else {
                return 0
            }
        });

        return brands;
    }

    public brandWithMoreModelsHelper(brands) {
        let sizeOf = 0;
        let modelsBrands = [];
        this.brandSortHelper(brands).forEach(brand => {
            if (brand.models.length > sizeOf) {
                sizeOf = brand.models.length;
                modelsBrands.push(brand);
            } else if (brand.models.length == sizeOf) {
                modelsBrands.push(brand);
            }
        });
        return this.brandsResponseModelHelper(modelsBrands);
    };

    public brandWithLessModelsHelper(brands) {
        let modelsBrands = [];
        this.brandSortHelper(brands).reverse();
        let sizeOf = brands[0].models.length;
        brands.forEach(brand => {
            if (brand.models.length < sizeOf) {
                sizeOf = brand.models.length;
                modelsBrands.push(brand);
            } else if (brand.models.length == sizeOf) {
                modelsBrands.push(brand);
            }
        });
        return this.brandsResponseModelHelper(modelsBrands);
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

    public searchBrandByName(brands, brandName) {
        let search;
        for (let i = 0; i < brands.length; i++) {
            if (brands[i].brand.toLowerCase() == `${brandName.toLowerCase()}`) {
                search = brands[i].models;
                break;
            } else {
                search = "Unregistered brand!";
            }
        }
        return search;
    }
};

export { BrandsManipulator };