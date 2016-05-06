"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Token = mongoose.model('Token');

router.get('/', function (req,res) {
    
    Token.find().exec(function (err,rows) {
        if(err){
            next(err);
            return
        }
        res.json({success:true, rows: rows});
    });
    
});

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
