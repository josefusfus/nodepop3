"use strict";

var mongoose = require('mongoose');

//Creamos Esquema

var pushTokenSchema = mongoose.Schema({
    plataforma: {type: String, enum: ['ios', 'android']},
    token: String,
    usuario: String
});

//Asignamos al modelo

mongoose.model('Token', pushTokenSchema);