var jwt = require('jsonwebtoken');

const authMiddleware = (roles) => {
    return (req, res, next) => {
        var authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(' ')[1];

        if (token == "" || token == null) {
            throw Error("No Autorizado");
        };

        jwt.verify(token, process.env.TOKEN, (err, user) => {
            if (err) return res.sendStatus(403);

            if (user.roles.includes("Administrador")  && roles.includes("Administrador")) {
                req.user = user

                next()
            } else if (user.roles.includes("Moderador")  && roles.includes("Moderador")) {
                req.user = user

                next()
            }else {
                return res.sendStatus(403);
            }
        });
    }
};

module.exports = { authMiddleware };