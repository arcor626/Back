const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Personal = require('../models/Personal');

app.post('/', (req, res) => {

    var body = req.body;
    Personal.create({

        personal_nombre: body.personal_nombre,
        personal_apellidos: body.personal_apellidos

    }).then(resultado => {
        res.status(200).json({
            ok: true,
            personal: resultado
        })

    }).catch(err => {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al insertar el personal',
            err
        });
    })
});


app.get('/', (req, res) => {
    Personal.findAll().then(resultado => {

        res.status(200).json({
            ok: true,
            personal: resultado
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener el personal',
            err
        });
    });
});

app.delete('/:id', (req, res) => {

    var id = req.params.id;
    Personal.destroy({
            where: { id_personal: id }
        }).then(resultadoElminar => {

            if (resultadoElminar != 0) {
                res.status(200).json({
                    ok: false,
                    mensaje: 'Se elimino correctamente el personal',
                    resultadoElminar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar el personal',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al eliminar el personal',
                err
            });
        })
})




// Regresa un accesorio en base a us parametros
app.get('/buscar/:termino', (req, res) => {
    var termino = req.params.termino;
    db.query("SP_BUSCAR_PERSONAL " + termino).then(resultado => {

        res.status(200).json({
            ok: true,
            personal: resultado[0]
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener el personal',
            err
        });
    });

});

app.put('/:id', (req, res) => {
    var body = req.body;

    var id = req.params.id;

    console.log(body);
    Personal.update({
            personal_nombre: body.personal_nombre,
            personal_apellidos: body.personal_apellidos




        }, {
            where: { id_personal: id }
        }).then(resultadoActualizar => {

            if (resultadoActualizar != 0) {
                res.status(200).json({
                    ok: true,
                    mensaje: 'Se actualizo correctamente el personal',
                    resultadoActualizar
                });
            } else {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar el personal',

                });

            }

        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al actualizar el personal',
                err
            });
        });


});
module.exports = app;