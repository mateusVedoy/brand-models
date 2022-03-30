
class BrandsManipulator {
    brandWithMoreModelsHelper(brands) {
        brands.sort((pre, pos) => pos.models.length - pre.models.length);
    };
};

export { BrandsManipulator };