var express = require('express');
var router = express.Router();
var db= require('../db/db');
const { getAcdExt,putAcdExt } = require('../controller/acdExtController');

router.get('/', getAcdExt );
router.put('/',putAcdExt)
 
 
module.exports = router;