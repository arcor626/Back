const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Mobiliario = require('../models/Mobiliario');
const Sequelize = require('sequelize');
const db = require('../config/database');

app.post('/', (req, res) => {

    var body = req.body;

    console.log("Estas en post");
    Mobiliario.findByPk(body.id_mobiliario).then(resultado => {
        res.status(200).json({
            ok: true,
            mobiliario: resultado
        })

    }).catch(err => {
        res.status(500).json({
            ok: false,
            mensaje: 'Error ya existe PK',
            err
        });
    })

    // Mobiliario.create({
    //     id_mobiliario: body.id_mobiliario,
    //     fk_id_servicio: body.fk_id_servicio,
    //     mob_especificaciones: body.mob_especificaciones,
    //     fk_id_proveedor: body.fk_id_proveedor,
    //     fk_id_encargado: body.fk_id_encargado,
    //     mob_fecha_compra: body.mob_fecha_compra,
    //     mob_fecha_asignacion: body.mob_fecha_asignacion,
    //     fk_id_area: body.fk_id_area,
    //     mob_comentarios: body.mob_comentarios,
    //     mob_status: 'Activo'



    // }).then(resultado => {
    //     res.status(200).json({
    //         ok: true,
    //         mobiliario: resultado
    //     })

    // }).catch(err => {
    //     res.status(500).json({
    //         ok: false,
    //         mensaje: 'Error al insertar el mobiliario',
    //         err
    //     });
    // })
});


app.get('/', (req, res) => {
    db.query("SELECT * FROM GET_MOBILIARIOS")
        .then(resultado => {

            res.status(200).json({
                ok: true,
                mobiliario: resultado[0]

            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al obtener el mobiliario',
                err
            });
        });
});

// app.get('/', (req, res) => {

//     Mobiliario.findAll().then(resultado => {

//         res.status(200).json({
//             ok: true,
//             mobiliario: resultado
//         });
//     });
// });

app.delete('/:id', (req, res) => {

    var id = req.params.id;
    Mobiliario.destroy({
            where: { id_mobiliario: id }
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

// Regresa un accesorio en base a us parametros
app.get('/buscar/:termino', (req, res) => {
    var termino = req.params.termino;
    db.query("SP_BUSCAR_MOBILIARIO " + termino).then(resultado => {

        res.status(200).json({
            ok: true,
            mobiliario: resultado[0]
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener el accesorio',
            err
        });
    });

});

app.put('/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;

    Mobiliario.update({
            fk_id_servicio: body.fk_id_servicio,
            mob_especificaciones: body.mob_especificaciones,
            fk_id_proveedor: body.fk_id_proveedor,
            fk_id_encargado: body.fk_id_encargado,
            mob_fecha_compra: body.mob_fecha_compra,
            mob_fecha_asignacion: body.mob_fecha_asignacion,
            fk_id_area: body.fk_id_area,
            mob_comentarios: body.mob_comentarios,
            mob_status: body.mob_status




        }, {
            where: { id_mobiliario: id }
        }).then(resultadoActualizar => {

            if (resultadoActualizar != 0) {
                res.status(200).json({
                    ok: true,
                    mensaje: 'Se actualizo correctamente el mobiliario',
                    resultadoActualizar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar el mobiliario',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al actualizar el mobiliario',
                err
            });
        });


});

module.exports = app;