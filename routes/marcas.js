const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Marcas = require('../models/Marcas');
const Sequelize = require('sequelize');


app.get('/', (req, res) => {
    Marcas.findAll().then(resultado => {

        res.status(200).json({
            ok: true,
            marcas: resultado
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener las marcas',
            err
        });
    });
});

module.exports = app;