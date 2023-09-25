var express = require('express');
const { getAllUsers, getOneUser, postCreateUser, putEditUser, deleteUser } = require('../controllers/users.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { errorAsyncHandler } = require('../middlewares/errorHandler.middleware');
var router = express.Router();
const validator = require("../middlewares/validaterHandler.middleware");

/* GET users listing. */
router.get('/', authMiddleware(["Administrador"]), errorAsyncHandler(getAllUsers));
router.get('/:id/single', authMiddleware(["Administrador"]), errorAsyncHandler(getOneUser));
router.post('/create', validator("userSchema"), authMiddleware(["Administrador"]), errorAsyncHandler(postCreateUser));
router.put('/:id/edit', validator("userUpdateSchema"), authMiddleware(["Administrador"]), errorAsyncHandler(putEditUser));
router.delete('/:id/delete', authMiddleware(["Administrador"]), errorAsyncHandler(deleteUser));

module.exports = router;
