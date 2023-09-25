const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .trim()
        .required()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    password: Joi.string()
        .min(4)
        .max(10)
        .trim()
        .required()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.min": "El Campo no Debe Ser Menor a 4",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        })
});

module.exports = { loginSchema };