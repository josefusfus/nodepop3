"use strict";

var mongoose = require('mongoose');
var conn = mongoose.connection;

// Handlers de eventos de conexion

conn.on('error', console.log.bind(console,'Error de conexion'));
conn.once('open', function () {
    console.log('Conectados a mongoDB');
});

// conectar a la base de datos

mongoose.connect('mongodb://localhost:27017/nodepop');

