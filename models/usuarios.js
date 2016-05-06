"use strict";

var mongoose = require('mongoose');

//Creamos Esquema

var usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String
});

//Asignamos al modelo

mongoose.model('Usuario', usuarioSchema);
