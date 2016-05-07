"use strict";

var mongoose = require('mongoose');

//Creamos Esquema

var anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

//Creamos modelo estatico


anuncioSchema.statics.list = function (filter, start, limit, sort, cb) {
    var query = Anuncio.find(filter);
    query.skip(start);
    query.limit(limit);
    query.sort(sort);
    query.exec(cb);
};

//Asignamos al modelo
var Anuncio = mongoose.model('Anuncio', anuncioSchema);
