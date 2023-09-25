const { allBrands, oneBrand, createBrand, updateBrand, deleteBrandServices } = require("../services/brands.service");
const { apiResponseSuccess } = require("../utils/responsers.utils");

const getAllBrands = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await allBrands(), "Mostrando Todas las Marcas"), 200);
};

const getOneBrand = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await oneBrand(req.params.id), "Marca Encontrada", 200));
};

const postCreateBrand = async (req, res) => {
    res.status(201).json(apiResponseSuccess(await createBrand(req.body), "Marca Creada", 201));
};

const putEditBrand = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await updateBrand(req.body, req.params.id), "Marca Actualizada", 200));
};

const deleteBrand = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await deleteBrandServices(req.params.id), "Marca Eliminada", 200));
};

module.exports = { getAllBrands, getOneBrand, postCreateBrand, putEditBrand, deleteBrand };