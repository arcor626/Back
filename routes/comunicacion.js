const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Comunicacion = require('../models/Comunicacion');
const Sequelize = require('sequelize');
const db = require('../config/database');

app.post('/', (req, res) => {

    var body = req.body;

    
    Comunicacion.create({
        id_componente: body.id_componente,
        comp_num_serie: body.comp_num_serie,
        fk_id_servicio: body.fk_id_servicio,
        comp_especificaciones: body.comp_especificaciones,
        fk_id_proveedor: body.fk_id_proveedor,
        fk_id_encargado: body.fk_id_encargado,
        comp_fecha_compra: body.comp_fecha_compra,
        comp_fecha_asignacion: body.comp_fecha_asignacion,
        fk_id_area: body.fk_id_area,
        comp_comentarios: body.comp_comentarios
        
    }).then(resultado => {
        res.status(200).json({
            ok: true,
            comunicacion: resultado
        })

    }).catch(err => {
         res.status(500).json({
            ok: false,
            mensaje: 'Error al insertar la comunicacion',
            err
        });
    })
});


app.get('/', (req, res) => {
    db.query("SELECT * FROM GET_COMUNICACIONS")
        .then(resultado => {

            res.status(200).json({
                ok: true,
                comunicacion: resultado[0]

            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al obtener la comunicacion',
                err
            });
        });
});

// app.get('/', (req, res) => {

//     Comunicacion.findAll().then(resultado => {

//         res.status(200).json({
//             ok: true,
//             comunicacion: resultado
//         });
//     });
// });

app.delete('/:id', (req, res) => {

    var id = req.params.id;
    Comunicacion.destroy({
            where: { id_componente: id }
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