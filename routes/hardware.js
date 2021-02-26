const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Hardware = require('../models/Hardware');
const Sequelize = require('sequelize');
const db = require('../config/database');


app.post('/', (req, res) => {

    var body = req.body;


    Hardware.create({
        id_hardware: body.id_hardware,
        hwd_num_serie: body.hwd_num_serie,
        fk_id_servicio: body.fk_id_servicio,
        hwd_especificaciones: body.hwd_especificaciones,
        fk_id_proveedor: body.fk_id_proveedor,
        hwd_procesador: body.hwd_procesador,
        hwd_ram: body.hwd_ram,
        fk_id_encargado: body.fk_id_encargado,
        fk_id_encarg_ante: body.fk_id_encarg_ante,
        hwd_fecha_compra: body.hwd_fecha_compra,
        hwd_fecha_asignacion: body.hwd_fecha_asignacion,
        fk_id_area: body.fk_id_area,
        hwd_comentarios: body.hwd_comentarios,
        hwd_status: 'Activo'



    }).then(resultado => {
        res.status(200).json({
            ok: true,
            hardware: resultado
        })

    }).catch(err => {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al insertar el hardware',
            err
        });
    })
});


app.get('/', (req, res) => {
    db.query("SELECT * FROM GET_HARDWARES")
        .then(resultado => {

            res.status(200).json({
                ok: true,
                hardware: resultado[0]

            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al obtener el hardware',
                err
            });
        });
});

// app.get('/', (req, res) => {

//     Hardware.findAll().then(resultado => {

//         res.status(200).json({
//             ok: true,
//             hardware: resultado
//         });
//     });
// });

app.delete('/:id', (req, res) => {

    var id = req.params.id;
    Hardware.destroy({
            where: { id_hardware: id }
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
    db.query("SP_BUSCAR_HARDWARE " + termino).then(resultado => {

        res.status(200).json({
            ok: true,
            hardware: resultado[0]
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener el hardware',
            err
        });
    });

});

app.put('/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;

    Hardware.update({
            hwd_num_serie: body.hwd_num_serie,
            fk_id_servicio: body.fk_id_servicio,
            hwd_especificaciones: body.hwd_especificaciones,
            fk_id_proveedor: body.fk_id_proveedor,
            hwd_procesador: body.hwd_procesador,
            hwd_ram: body.hwd_ram,
            fk_id_encargado: body.fk_id_encargado,
            fk_id_encarg_ante: body.fk_id_encarg_ante,
            hwd_fecha_compra: body.hwd_fecha_compra,
            hwd_fecha_asignacion: body.hwd_fecha_asignacion,
            fk_id_area: body.fk_id_area,
            hwd_comentarios: body.hwd_comentarios,
            hwd_status: body.hwd_status





        }, {
            where: { id_hardware: id }
        }).then(resultadoActualizar => {

            if (resultadoActualizar != 0) {
                res.status(200).json({
                    ok: true,
                    mensaje: 'Se actualizo correctamente el hardware',
                    resultadoActualizar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar el hardware',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al actualizar el hardware',
                err
            });
        });


});
module.exports = app;