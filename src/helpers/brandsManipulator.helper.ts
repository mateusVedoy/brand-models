
class BrandsManipulator {
    brandWithMoreModelsHelper(brands) {
        let sizeOf = 0;
        let moreModelsBrands = [];
        brands.sort((pre, pos) => pos.models.length - pre.models.length).forEach(brand => {
            if(brand.models.length > sizeOf) {
                sizeOf = brand.models.length;
                moreModelsBrands.push(brand.brand);
            }else if(brand.models.length == sizeOf){
                moreModelsBrands.push(brand.brand);
            }
        });
        return moreModelsBrands.reverse();
    };
};

export { BrandsManipulator };