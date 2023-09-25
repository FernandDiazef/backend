const bcrypt = require('bcrypt');
const saltRounds = 10;

const { Users } = require("../models");

const allUsers = async () => {
    const users = await Users.findAll();    
    return users;
};

const oneUser = async (id) => {
    const user = await Users.findByPk(id);
    return user
};

const getPassworWithdHash = (password) => {
    const hash = bcrypt.hashSync(password, saltRounds, (err, hash) => {
        return hash;
    });
    return hash;
};

const createUser = async (data) => {
    data.password = getPassworWithdHash(data.password);
    const user = await Users.create(data);
    return user;
};

const editUser = async (body, id) => {
    body.password = getPassworWithdHash(body.password);
    const user = await Users.update(body, {
        where: {
            id: id
        }
    });
    return user;
};

const deleteUserService = async (id) => {
    const user = await Users.destroy({
        where: {
            id: id
        }
    });
    return user;
};

module.exports = { allUsers, oneUser, createUser, editUser, deleteUserService };