const express= require('express');
const upload = require('../config/multer');
const router= express.Router();
const { fileController, getValidRecords }= require('../controller/fileController.js');

router.post('/',upload.single("file"),fileController);
router.get('/', getValidRecords);

module.exports= router;