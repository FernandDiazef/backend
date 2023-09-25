const { Product, Brands, Categories, Users } = require("../models");

const allProducts = async (host, page) => {
    const limit = 10;
    const offset = (page * limit) - limit || 0;
    const currentPage = (offset * 0.1) + 1;
    const products = await Product.findAndCountAll({ offset: parseInt(offset), limit: parseInt(limit), include: [Brands, Categories, Users] });

    const { rows, count } = products;
    const totalPAges = Math.ceil(count / limit)

    const paginate = {
        totalPages: totalPAges,
        currentPage: currentPage,
        totalItems: limit,
        next: currentPage < totalPAges ? `${host}?page=${currentPage + 1}` : null,
        last: currentPage > 1 ? `${host}?page=${currentPage - 1}` : null,
        data: rows
    };
    return paginate;
};

const oneProduct = async (id) => {
    const product = await Product.findByPk(id, { include: [Brands, Categories, Users] });
    return product;
};

const createProduct = async (data) => {
    const product = await Product.create(data);
    return product;
};

const updateProduct = async (body, id) => {
    const product = await Product.update(body, {
        where: {
            id: id
        }
    }, { include: [Brands, Categories, Users] });
    return product;
};

const deleteProductServices = async (id) => {
    const product = await Product.destroy({
        where: {
            id: id
        }
    });
    return product;
};

module.exports = { allProducts, oneProduct, createProduct, updateProduct, deleteProductServices };