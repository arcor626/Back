const Sequelize = require('sequelize');
const db = require('../config/database');

var Comunicacion = db.define('comunicacions', {

    id_componente: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
    comp_num_serie: { type: Sequelize.STRING, allowNull: true },
    fk_id_servicio: { type: Sequelize.INTEGER, allowNull: false },
    comp_especificaciones: { type: Sequelize.STRING, allowNull: true },
    fk_id_proveedor: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_encargado: { type: Sequelize.INTEGER, allowNull: true },
    comp_fecha_compra: { type: Sequelize.DATEONLY, allowNull: true },
    comp_fecha_asignacion: { type: Sequelize.DATEONLY, allowNull: true },
    fk_id_area: { type: Sequelize.INTEGER, allowNull: false },
    comp_comentarios: { type: Sequelize.STRING, allowNull: true },
}, {
    timestamps: false


});

module.exports = Comunicacion;