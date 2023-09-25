const { allUsers, oneUser, createUser, editUser, deleteUserService } = require("../services/users.services");
const { apiResponseSuccess } = require("../utils/responsers.utils");

const getAllUsers = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await allUsers(), "Todos Los Usuarios Mostrados", 200));
};

const getOneUser = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await oneUser(req.params.id), "Usuario Encontrado", 200));
};

const postCreateUser = async (req, res) => {
    res.status(201).json(apiResponseSuccess(await createUser(req.body), "Se ha creado con exito", 201));
};

const putEditUser = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await editUser(req.body, req.params.id), "Se Actualizo el Usuario", 200));
};

const deleteUser = async (req, res) => {
    res.status(200).json(apiResponseSuccess(await deleteUserService(req.params.id), "Se Elimino el Usurio", 200));
};


module.exports = { getAllUsers, getOneUser, postCreateUser, putEditUser, deleteUser };