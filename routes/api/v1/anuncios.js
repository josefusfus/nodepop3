"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');


// Get para devolver resultados segun parametros

router.get('/', function (req,res, next) {
    
    var nombre = req.query.nombre;
    var tags = req.query.tags;
    var venta = req.query.venta;
    var min = req.query.min;
    var max = req.query.max;
    var start = parseInt(req.query.start || 0);
    var limit = parseInt(req.query.limit || null);
    var sort = req.query.sort || null;

    var criteria = {};

    if (typeof nombre !== 'undefined'){
        criteria.nombre = nombre;
    }

    if (typeof tags !== 'undefined'){
        criteria.tags = tags;
    }

    if (typeof venta !== 'undefined'){
        criteria.venta = venta;
    }

    

    Anuncio.list(criteria, start, limit , sort, function (err, rows) {
        if(err){
            return res.json({success: false, error: err});
        }
        res.json({success: true, rows : rows});
    });
});

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