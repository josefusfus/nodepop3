"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Token = mongoose.model('Token');

router.post('/', function (req,res, next) {

    var token = new Token(req.body);
    token.save(function (err, saved) {
        if(err){
            next(err);
            return;
        }
        res.json({success:true, saved: saved});

    });
});

module.exports = router;
