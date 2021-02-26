var express = require('express');
var app = express();

var Usuario = require('../models/Usuario');

var body = require('body-parser');
const { json } = require('body-parser');

app.get('/', (req, res) => {

    console.log('ESte mensaje es del servidor del backend');

    return res.status(200).json({
        mensaje: 'Se realizo la peticion',
        ok: 'true'
    });
});

app.post('/', (req, res) => {

    var body = req.body;

    Usuario.findOne({
        where: {
            usuario_correo: body.correo
        }
    })

    .then(resultadoDeConsulta => {

        if (resultadoDeConsulta != null) {
            if (body.password == resultadoDeConsulta.dataValues.usuario_pasword) {
                console.log(resultadoDeConsulta.dataValues);
                res.status(200).json({
                    mensaje: 'Logeo completado, las credenciales son correctas',
                    ok: 'true',
                    usuario: resultadoDeConsulta.dataValues,
                    token: true
                });

            } else {
                return res.status(400).json({
                    mensaje: 'La contraseña no coincide',
                    ok: 'false'

                });
            }


        } else {
            return res.status(400).json({
                mensaje: 'No se encuentra ese correo',
                ok: 'false'

            });
        }
    })

    .catch(err => {

        return res.status(400).json({
            mensaje: 'Error interno',
            ok: 'false'

        });
    });

});

module.exports = app;