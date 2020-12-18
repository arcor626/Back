var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'Peticion realizada',
        ok: 'true'
    })
})

module.exports = app;