"use strict";

var mongoose = require('mongoose');

//Creamos Esquema

var anuncioSchema = mongoose.Schema({
    nombre: String,
    //venta: Boolean,
    //precio: Number,
    //foto: String,
    //tags: [String]
});

//Asignamos al modelo

mongoose.model('Anuncio', anuncioSchema);
