var express = require('express');

const multer  = require('multer')
// const upload = multer({ dest: 'files/' })
const { getAllProducts, getOneProduct, postCreateProduct, deleteProduct, putEditProduct } = require('../controllers/products.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { errorAsyncHandler } = require('../middlewares/errorHandler.middleware');
const { S3Client } = require('@aws-sdk/client-s3');

const multerS3 = require('multer-s3');

const s3Client = new S3Client({ region: process.env.REGION, credentials: {accessKeyId: process.env.ACCESSKEYID, secretAccessKey: process.env.SECRETACCESSKEY} });

const upload = multer({
    storage: multerS3({
      s3: s3Client,
      bucket: process.env.BUCKET,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })

var router = express.Router();
const validator = require("../middlewares/validaterHandler.middleware");

router.get("/", [authMiddleware(["Administrador"]), upload.single("image")], errorAsyncHandler(getAllProducts));
router.get("/:id/single", authMiddleware(["Administrador"]), errorAsyncHandler(getOneProduct));
router.post("/create", [upload.single("image"), validator("productSchema"), authMiddleware(["Administrador"])], errorAsyncHandler(postCreateProduct));
router.put("/:id/update", [upload.single("image"), validator("productUpdateSchema"), authMiddleware(["Administrador"])], errorAsyncHandler(putEditProduct));
router.delete("/:id/delete", authMiddleware(["Administrador"]), errorAsyncHandler(deleteProduct));

module.exports = router;