const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string()
        .required()
        .trim()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    price: Joi.number()
        .integer()
        .precision(2)
        .positive()
        .required()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    
    image: Joi.string()
        .required()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    brandId: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    userId: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    categoryId: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
});

const productUpdateSchema = Joi.object({
    name: Joi.string()
        .trim()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    price: Joi.number()
        .integer()
        .precision(2)
        .positive()
        .min(10)
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    brandId: Joi.number()
        .integer()
        .positive()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    userId: Joi.number()
        .integer()
        .positive()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        }),
    categoryId: Joi.number()
        .integer()
        .positive()
        .messages({
            "string.base": "El Campo Debe ser un String",
            "string.trim": "La cadena contiene espacios en blanco a su alrededor",
            "string.empty": "El Campo No contiene nada",
            "any.required": "El Campo no Puede Estar Vacio"
        })
});

module.exports = { productSchema, productUpdateSchema };
