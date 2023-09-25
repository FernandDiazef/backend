const { Brands } = require("../models");


const allBrands = async () => {
    const brands = await Brands.findAll();
    return brands;
};

const oneBrand = async (id) => {
    const brand = await Brands.findByPk(id);
    return brand;
};

const createBrand = async (data) => {
    const brand = await Brands.create(data);
    return brand;
};

const updateBrand = async (body, id) => {
    const brand = await Brands.update(body, {
        where: {
            id: id
        }
    });
    return brand;
};

const deleteBrandServices = async (id) => {
    const brand = await Brands.destroy({
        where: {
            id: id
        }
    });
    return brand;
};

module.exports = { allBrands, oneBrand, createBrand, updateBrand, deleteBrandServices };