const { Categories } = require("../models");


const allCategorys = async () => {
    const categories = await Categories.findAll();
    return categories;
};

const oneCategory = async (id) => {
    const category = await Categories.findByPk(id);
    return category;
};

const createCategory = async (data) => {
    const category = await Categories.create(data);
    return category;
};

const updateCategory = async (body, id) => {
    const category = await Categories.update(body, {
        where: {
            id: id
        }
    });
    return category;
};

const deleteCategoryServices = async (id) => {
    const category = await Categories.destroy({
        where: {
            id: id
        }
    });
    return category;
};

module.exports = { allCategorys, oneCategory, createCategory, updateCategory, deleteCategoryServices };