const { allCategorys, oneCategory, createCategory, updateCategory, deleteCategoryServices } = require("../services/category.service");
const { apiResponseSuccess } = require("../utils/responsers.utils");

const getAllCategories = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await allCategorys(), "Todas Las Categorias Mostrados", 200));
};

const getOneCategory = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await oneCategory(req.params.id), "Categoria Encontrada", 200));
};

const postCreateCategory = async (req, res) => {
    res.status(201).json(apiResponseSuccess(await createCategory(req.body), "Categoria Creada", 201));
};

const putEditCategory = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await updateCategory(req.body, req.params.id), "Categoria Actualizada", 200));
};

const deleteCategory = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await deleteCategoryServices(req.params.id), "Categoria Eliminada", 200));
};

module.exports = { getAllCategories, getOneCategory, postCreateCategory, putEditCategory, deleteCategory };