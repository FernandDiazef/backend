const { Authentication } = require("../services/login.service");
const { apiResponseError, apiResponseSuccess } = require("../utils/responsers.utils");

const postLogin = async (req, res) => {
    const token = await Authentication(req.body);
    if (token) {
        res.status(200).json(apiResponseSuccess({token}, "Usuario encontrado", 200));
    } else {
        res.status(401).json(apiResponseError(null, "Usuario o contraseña invalido", 401));
    };
};

const postLgout = async (req, res) => {
    res.status(200).json(apiResponseSuccess({}, "Cierre de Sesión", 200));
};

module.exports = { postLogin, postLgout };
