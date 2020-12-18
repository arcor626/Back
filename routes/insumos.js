var express = require('express');
var app = express();
var Insumos = require('../models/Insumos');

app.get('/', (req, res) => {

    Insumos.findAll().then(resultado => {

        res.status(200).json({
            ok: true,
            insumos: resultado
        });
    });
});

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
module.exports = app;