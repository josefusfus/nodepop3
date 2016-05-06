"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');

router.post('/', function (req,res, next) {
    
   var anuncio = new Anuncio(req.body);
    anuncio.save(function (err, saved) {
        if(err){
            next(err);
            return;
        }
        res.json({success:true, saved: saved});

    });
});

module.exports = router;