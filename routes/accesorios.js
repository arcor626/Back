const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Accesorios = require('../models/Accesorio');
const Sequelize = require('sequelize');
const db = require('../config/database');

app.post('/', (req, res) => {

    var body = req.body;

    var proveedor = body.fk_id_proveedor == "0" ? null : body.fk_id_proveedor;
    var encargado = body.fk_id_encargado == "0" ? null : body.fk_id_encargado;


    Accesorios.create({
        id_accesorio: body.id_accesorio,
        acc_num_serie: body.acc_num_serie,
        fk_id_servicio: body.fk_id_servicio,
        acc_especificaciones: body.acc_especificaciones,
        fk_id_proveedor: proveedor,
        fk_id_encargado: body.encargado,
        acc_fecha_compra: body.acc_fecha_compra,
        acc_fecha_asignacion: body.acc_fecha_asignacion,
        fk_id_area: body.fk_id_area,
        acc_comentarios: body.acc_comentarios,
        acc_status: 'Activo'


    }).then(resultado => {
        res.status(200).json({
            ok: true,
            accesorio: resultado
        })

    }).catch(err => {
        res.status(400).json({
            ok: false,
            mensaje: 'Error al insertar el accesorio',
            // err 
        });
    })
});



app.get('/', (req, res) => {
    db.query("SELECT * FROM GET_ACCESORIOS")
        .then(resultado => {

            res.status(200).json({
                ok: true,
                accesorios: resultado[0]

            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al obtener el accesorio',
                err
            });
        });
});


// Regresa un accesorio en base a su ID
app.get('/:id', (req, res) => {
    var id = req.params.id;
    db.query("SP_GET_ACCESORIO " + id).then(resultado => {

        res.status(200).json({
            ok: true,
            accesorio: resultado[0][0]
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener el accesorio',
            err
        });
    });

});

// Regresa un accesorio en base a us parametros
app.get('/buscar/:termino', (req, res) => {
    var termino = req.params.termino;
    db.query("SP_BUSCAR_ACCESORIO " + termino).then(resultado => {

        res.status(200).json({
            ok: true,
            accesorio: resultado[0]
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener el accesorio',
            err
        });
    });

});


app.delete('/:id', (req, res) => {

    var id = req.params.id;
    Accesorios.destroy({
            where: { id_accesorio: id }
        }).then(resultadoElminar => {

            if (resultadoElminar != 0) {
                res.status(200).json({
                    ok: true,
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

app.put('/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;

    Accesorios.update({
            acc_num_serie: body.acc_num_serie,
            fk_id_servicio: body.fk_id_servicio,
            acc_especificaciones: body.acc_especificaciones,
            fk_id_proveedor: body.fk_id_proveedor,
            fk_id_encargado: body.fk_id_encargado,
            acc_fecha_compra: body.acc_fecha_compra,
            acc_fecha_asignacion: body.acc_fecha_asignacion,
            fk_id_area: body.fk_id_area,
            acc_comentarios: body.acc_comentarios,
            acc_status: body.acc_status




        }, {
            where: { id_accesorio: id }
        }).then(resultadoActualizar => {

            if (resultadoActualizar != 0) {
                res.status(200).json({
                    ok: true,
                    mensaje: 'Se actualizo correctamente el accesorio',
                    resultadoActualizar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar el accesorio',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al actualizar el accesorio',
                err
            });
        });


});
module.exports = app;