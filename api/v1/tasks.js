'use strict';

var express = require('express');
var router = express.Router();


router.get('/task', function(req,res,next){
	res.send('From another file');
});

module.exports = router;
