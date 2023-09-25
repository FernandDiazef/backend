const { brandSchema, brandUpdateSchema } = require("./brands.schema")
const { categorySchema, categoryUpdateSchema } = require("./categories.schema")
const { loginSchema } = require("./login.schema")
const { productSchema, productUpdateSchema } = require("./product.schema")
const { userSchema, userUpdateSchema } = require("./users.schema")



module.exports = {
    loginSchema,
    userSchema,
    userUpdateSchema,
    brandSchema,
    categorySchema,
    categoryUpdateSchema,
    brandUpdateSchema,
    productSchema,
    productUpdateSchema
};