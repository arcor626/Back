const Sequelize = require('sequelize');
const db = require('../config/database');

var Mobiliario = db.define('mobiliarios', {

    id_mobiliario: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
    fk_id_servicio: { type: Sequelize.INTEGER, allowNull: false },
    mob_especificaciones: { type: Sequelize.STRING, allowNull: true },
    fk_id_proveedor: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_encargado: { type: Sequelize.INTEGER, allowNull: true },
    mob_fecha_compra: { type: Sequelize.DATEONLY, allowNull: true },
    mob_fecha_asignacion: { type: Sequelize.DATEONLY, allowNull: true },
    fk_id_area: { type: Sequelize.INTEGER, allowNull: false },
    mob_comentarios: { type: Sequelize.STRING, allowNull: true },
}, {
    timestamps: false


});

module.exports = Mobiliario;