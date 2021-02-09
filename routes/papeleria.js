const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Papeleria = require('../models/Papeleria');
const Sequelize = require('sequelize');
const db = require('../config/database');

app.get('/', (req, res) => {
    db.query("SELECT * FROM GET_PAPELERIA")
        .then(resultado => {

            res.status(200).json({
                ok: true,
                papeleria: resultado[0]

            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al obtener papeleria',
                err
            });
        });
});
// app.get('/', (req, res) => {

//     Papeleria.findAll().then(resultado => {

//         res.status(200).json({
//             ok: true,
//             papeleria: resultado
//         });
//     });
// });

app.delete('/:id', (req, res) => {

    var id = req.params.id;
    Papeleria.destroy({
            where: { id_papeleria: id }
        }).then(resultadoElminar => {

            if (resultadoElminar != 0) {
                res.status(200).json({
                    ok: false,
                    mensaje: 'Se elimino correctamente el usuario',
                    resultadoElminar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar el usuario',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al eliminar el usuario',
                err
            });
        })
})
module.exports = app;