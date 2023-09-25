var express = require('express');
const { postLogin } = require('../controllers/login.controller');
const { errorAsyncHandler } = require('../middlewares/errorHandler.middleware');
var router = express.Router();
const validator = require("../middlewares/validaterHandler.middleware");


// Login users
router.post('/auth', validator("loginSchema"), errorAsyncHandler(postLogin));
// router.post('/logout', postUserLogout);

module.exports = router;