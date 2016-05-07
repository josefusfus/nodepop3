"use strict";

var jwt = require('jsonwebtoken');

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');
//var Usuario = require('mongoose').model('Usuarios');

router.get('/', function (req,res) {

    Usuario.find().exec(function (err,rows) {
        if(err){
            next(err);
            return
        }
        res.json({success:true, rows: rows});
    });

});

router.post('/authenticate', function (req, res) {
    var email = req.body.email;
    var clave = req.body.clave;

    Usuario.findOne({email: email}).exec(function (err, email) {
        if (err){
            return res.status(500).json({success:false, err: err});
        }
        if (!email){
            return res.status(401).json({success:false, error:'Auth failed. User not found'});
        }

        if (email.clave !== clave){
            return res.status(401).json({success:false, err:'Auth Failed. Invalid Password'});
        }

        var token = jwt.sign({id: email._id},'gsdgsdgsgsdg',{
            expiresIn:2
        });

        res.json({success:true, toke:token});
    });

});

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
