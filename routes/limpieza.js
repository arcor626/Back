const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Limpieza = require('../models/Limpieza');
const Sequelize = require('sequelize');
const db = require('../config/database');

app.post('/', (req, res) => {

    var body = req.body;

    Limpieza.create({
        id_limpieza: body.id_limpieza,
        limp_fecha_compra: body.limp_fecha_compra,
        fk_id_proveedor: body.fk_id_proveedor,
        fk_id_marca: body.fk_id_marca,
        limp_producto: body.limp_producto,
        limp_piezas: body.limp_piezas,
        fk_id_area: body.fk_id_area,
        limp_comentarios: body.limp_comentarios,



    }).then(resultado => {
        res.status(200).json({
            ok: true,
            limpieza: resultado
        })

    }).catch(err => {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al insertar la limpieza',
            err
        });
    })
});

app.get('/', (req, res) => {
    db.query("SELECT * FROM GET_LIMPIEZAS")
        .then(resultado => {

            res.status(200).json({
                ok: true,
                limpieza: resultado[0]

            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al obtener la limpieza',
                err
            });
        });
});

// app.get('/', (req, res) => {

//     Limpieza.findAll().then(resultado => {

//         res.status(200).json({
//             ok: true,
//             limpieza: resultado
//         });
//     });
// });

app.delete('/:id', (req, res) => {

    var id = req.params.id;
    Limpieza.destroy({
            where: { id_limpieza: id }
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
    db.query("SP_BUSCAR_LIMPIEZA " + termino).then(resultado => {

        res.status(200).json({
            ok: true,
            limpieza: resultado[0]
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener la limpieza',
            err
        });
    });

});

app.put('/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;

    Limpieza.update({
            acc_num_serie: body.acc_num_serie,
            limp_fecha_compra: body.limp_fecha_compra,
            fk_id_proveedor: body.fk_id_proveedor,
            fk_id_marca: body.fk_id_marca,
            limp_producto: body.limp_producto,
            limp_piezas: body.limp_piezas,
            fk_id_area: body.fk_id_area,
            limp_comentarios: body.limp_comentarios,


        }, {
            where: { id_limpieza: id }
        }).then(resultadoActualizar => {

            if (resultadoActualizar != 0) {
                res.status(200).json({
                    ok: true,
                    mensaje: 'Se actualizo correctamente la limpieza',
                    resultadoActualizar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar la limpieza',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al actualizar la limpieza',
                err
            });
        });


});

app.put('/agregar/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;




    Limpieza.update({


            limp_piezas: body.limp_piezas + 1

        }, {
            where: { id_limpieza: id }
        }).then(resultadoActualizar => {

            if (resultadoActualizar != 0) {
                res.status(200).json({
                    ok: true,
                    mensaje: 'Se actualizo correctamente la papeleria',
                    resultadoActualizar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar la papeleria',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al actualizar la papeleria',
                err
            });
        });


});

app.put('/quitar/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;




    Limpieza.update({


            limp_piezas: body.limp_piezas - 1

        }, {
            where: { id_limpieza: id }
        }).then(resultadoActualizar => {

            if (resultadoActualizar != 0) {
                res.status(200).json({
                    ok: true,
                    mensaje: 'Se actualizo correctamente la papeleria',
                    resultadoActualizar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar la papeleria',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al actualizar la papeleria',
                err
            });
        });


});
module.exports = app;