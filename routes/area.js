const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Area = require('../models/Area');


app.get('/', (req, res) => {
    Area.findAll().then(resultado => {

        res.status(200).json({
            ok: true,
            areas: resultado
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener las areas',
            err
        });
    });
});

module.exports = app;