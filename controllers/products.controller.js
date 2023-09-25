const { allProducts, oneProduct, createProduct, updateProduct, deleteProductServices} = require("../services/products.service");
const { apiResponseSuccess } = require("../utils/responsers.utils");

const getAllProducts = async (req, res) => {
    url = req.get("host") + req.baseUrl;
    res.status(200).json(apiResponseSuccess(await allProducts(url, req.query.page), "Todos Los Usuarios Mostrados", 200));
};

const getOneProduct = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await oneProduct(req.params.id), "Usuario Encontrado", 200));
};

const postCreateProduct = async (req, res) => {
    res.status(201).json(apiResponseSuccess(await createProduct(req.body), "Se ha creado con exito", 201));
};

const putEditProduct = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await updateProduct(req.body, req.params.id), "Se Actualizo el Usuario", 200));
};

const deleteProduct = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await deleteProductServices(req.params.id), "Se Elimino el Usurio", 200));
};

module.exports = { getAllProducts, getOneProduct, postCreateProduct, putEditProduct, deleteProduct };