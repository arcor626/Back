var express = require('express');
var app = express();
var Limpieza = require('../models/Limpieza');

app.get('/', (req, res) => {

    Limpieza.findAll().then(resultado => {

        res.status(200).json({
            ok: true,
            limpieza: resultado
        });
    });
});

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
module.exports = app;