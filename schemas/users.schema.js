const Joi = require('joi');

const userSchema = Joi.object({
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
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.min": "El Campo no Debe Ser Menor a 4",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        })
});

const userUpdateSchema = Joi.object({
    email: Joi.string()
        .email()
        .trim()
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
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.min": "El Campo no Debe Ser Menor a 4",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        })
})

module.exports = { userSchema, userUpdateSchema };

