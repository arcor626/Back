const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Insumos = require('../models/Insumos');
const Sequelize = require('sequelize');
const db = require('../config/database');

app.post('/', (req, res) => {

    var body = req.body;

    console.log("estas en el post de insumos");
    console.log(body);

    Insumos.create({
        id_insumo: body.id_insumo,
        ins_fecha_compra: body.ins_fecha_compra,
        fk_id_proveedor: body.fk_id_proveedor,
        fk_id_marca: body.fk_id_marca,
        ins_producto: body.ins_producto,
        ins_piezas: body.ins_piezas,
        fk_id_area: body.fk_id_area,
        ins_comentarios: body.ins_comentarios,



    }).then(resultado => {
        res.status(200).json({
            ok: true,
            insumos: resultado
        })

    }).catch(err => {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al insertar los insumos',
            err
        });
    })
});


app.get('/', (req, res) => {
    db.query("SELECT * FROM GET_INSUMOS")
        .then(resultado => {

            res.status(200).json({
                ok: true,
                insumos: resultado[0]

            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al obtener los insumos',
                err
            });
        });
});

// app.get('/', (req, res) => {

//     Insumos.findAll().then(resultado => {

//         res.status(200).json({
//             ok: true,
//             insumos: resultado
//         });
//     });
// });

app.delete('/:id', (req, res) => {

    var id = req.params.id;
    Insumos.destroy({
            where: { id_insumo: id }
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
    db.query("SP_BUSCAR_INSUMOS " + termino).then(resultado => {

        res.status(200).json({
            ok: true,
            insumos: resultado[0]
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener los insumos',
            err
        });
    });

});

app.put('/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;

    Insumos.update({
            ins_fecha_compra: body.ins_fecha_compra,
            fk_id_proveedor: body.fk_id_proveedor,
            fk_id_marca: body.fk_id_marca,
            ins_producto: body.ins_producto,
            ins_piezas: body.ins_piezas,
            fk_id_area: body.fk_id_area,
            ins_comentarios: body.ins_comentarios,




        }, {
            where: { id_insumo: id }
        }).then(resultadoActualizar => {

            if (resultadoActualizar != 0) {
                res.status(200).json({
                    ok: true,
                    mensaje: 'Se actualizo correctamente el insumo',
                    resultadoActualizar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar el insumo',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al actualizar el insumo',
                err
            });
        });


});

app.put('/agregar/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;




    Insumos.update({


            ins_piezas: body.ins_piezas + 1

        }, {
            where: { id_insumo: id }
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




    Insumos.update({


            ins_piezas: body.ins_piezas - 1

        }, {
            where: { id_insumo: id }
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