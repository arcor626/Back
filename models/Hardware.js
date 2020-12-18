const Sequelize = require('sequelize');
const db = require('../config/database');

var Hardware = db.define('hardwares', {

    id_hardware: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
    hwd_num_serie: { type: Sequelize.STRING, allowNull: true },
    fk_id_servicio: { type: Sequelize.INTEGER, allowNull: false },
    hwd_especificaciones: { type: Sequelize.STRING, allowNull: true },
    fk_id_proveedor: { type: Sequelize.INTEGER, allowNull: true },
    hwd_procesador: { type: Sequelize.STRING, allowNull: true },
    hwd_ram: { type: Sequelize.STRING, allowNull: true },
    fk_id_encargado: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_encarg_ante: { type: Sequelize.INTEGER, allowNull: true },
    hwd_fecha_compra: { type: Sequelize.DATEONLY, allowNull: true },
    hwd_fecha_asignacion: { type: Sequelize.DATEONLY, allowNull: true },
    fk_id_area: { type: Sequelize.INTEGER, allowNull: true },
    hwd_comentarios: { type: Sequelize.STRING, allowNull: true },
}, {
    timestamps: false


});

module.exports = Hardware;