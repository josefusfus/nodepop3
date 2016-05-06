"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

router.post('/', function (req,res, next) {

    var usuario = new Usuario(req.body);
    usuario.save(function (err, saved) {
        if(err){
            next(err);
            return;
        }
        res.json({success:true, saved: saved});

    });
});

module.exports = router;
