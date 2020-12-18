var express = require('express');
var app = express();
var Comunicacion = require('../models/Comunicacion');

app.get('/', (req, res) => {

    Comunicacion.findAll().then(resultado => {

        res.status(200).json({
            ok: true,
            comunicacion: resultado
        });
    });
});

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