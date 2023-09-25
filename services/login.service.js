const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { Users, UserRole, Role } = require("../models");

const Authentication = async ({ email, password }) => {
    const user = await Users.findOne({ where: { email: email },
        include: [{model: UserRole, include: [Role]}]});
    if (user) {
        const results = bcrypt.compareSync(password, user.password);
        if (results) {
            const { password, ...userWithoutPassword } = await user.get();
            const {email, UserRoles} =  userWithoutPassword;

            const userFormat = {email, roles: []};

            UserRoles.map(userRole => userFormat.roles.push(userRole.Role.name));

            var token = jwt.sign(userFormat, process.env.TOKEN);

            return token;
        } else {
            return false;
        };
    } else {
        return false;
    };
};

module.exports = { Authentication };