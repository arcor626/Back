const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Papeleria = require('../models/Papeleria');
const Sequelize = require('sequelize');
const db = require('../config/database');


app.post('/', (req, res) => {

    var body = req.body;


    Papeleria.create({
        id_papeleria: body.id_papeleria,
        pape_fecha_compra: body.pape_fecha_compra,
        fk_id_proveedor: body.fk_id_proveedor,
        fk_id_marca: body.fk_id_marca,
        pape_producto: body.pape_producto,
        pape_piezas: body.pape_piezas,
        fk_id_area: body.fk_id_area,
        pape_comentarios: body.pape_comentarios,



    }).then(resultado => {
        res.status(200).json({
            ok: true,
            papeleria: resultado
        })

    }).catch(err => {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al insertar la papeleria',
            err
        });
    })
});

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

// Regresa un accesorio en base a us parametros
app.get('/buscar/:termino', (req, res) => {
    var termino = req.params.termino;
    db.query("SP_BUSCAR_PAPELERIA " + termino).then(resultado => {

        res.status(200).json({
            ok: true,
            papeleria: resultado[0]
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener la papeleria',
            err
        });
    });

});

app.put('/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;

    Papeleria.update({
            pape_fecha_compra: body.mob_fecha_compra,
            fk_id_proveedor: body.fk_id_proveedor,
            fk_id_marca: body.fk_id_marca,
            pape_producto: body.pape_producto,
            pape_piezas: body.pape_piezas,
            fk_id_area: body.fk_id_area,
            pape_comentarios: body.pape_comentarios,




        }, {
            where: { id_papeleria: id }
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

app.put('/agregar/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;




    Papeleria.update({


            pape_piezas: body.pape_piezas + 1

        }, {
            where: { id_papeleria: id }
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




    Papeleria.update({


            pape_piezas: body.pape_piezas - 1

        }, {
            where: { id_papeleria: id }
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