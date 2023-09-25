const schema = require("../schemas");

module.exports = (validatorName) => {
    if (!schema.hasOwnProperty(validatorName)) {
        throw new Error(`"${validatorName}" Validador no fue encontrado`);
    };
    return async (req, res, next) => {
        try {
            if (req.file) {
                req.body["image"] = req.file.location;
            }
            console.log(req.body);
            const validate = await schema[validatorName].validateAsync(req.body);
            req.body = validate;
            next();
        } catch (error) {
            next(error);
        };
    };
};