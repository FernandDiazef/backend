const Joi = require('joi');

const categorySchema = Joi.object({
    name: Joi.string()
        .required()
        .trim()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        })
});

const categoryUpdateSchema = Joi.object({
    name: Joi.string()
        .trim()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
});

module.exports = { categorySchema, categoryUpdateSchema };