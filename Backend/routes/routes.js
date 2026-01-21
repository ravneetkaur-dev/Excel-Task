const express= require('express');
const upload = require('../config/multer');
const router= express.Router();
const { fileController }= require('../controller/fileController.js');

router.post('/',upload.single("file"),fileController);

module.exports= router;