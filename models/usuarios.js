"use strict";

var mongoose = require('mongoose');

//Creamos Esquema

var usuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    clave: {
        type: String,
        required:true
    }
});


//Usamos indices para el identificador de ususario que es email

usuarioSchema.index({email: 1});

//Asignamos al modelo

mongoose.model('Usuario', usuarioSchema);
