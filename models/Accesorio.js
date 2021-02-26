const Sequelize = require('sequelize');
const db = require('../config/database');

var Accesorio = db.define('accesorios', {

    id_accesorio: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
    acc_num_serie: { type: Sequelize.STRING, allowNull: true },
    fk_id_servicio: { type: Sequelize.INTEGER, allowNull: false },
    acc_especificaciones: { type: Sequelize.STRING, allowNull: true },
    fk_id_proveedor: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_encargado: { type: Sequelize.INTEGER, allowNull: true },
    acc_fecha_compra: { type: Sequelize.DATEONLY, allowNull: true },
    acc_fecha_asignacion: { type: Sequelize.DATEONLY, allowNull: true },
    fk_id_area: { type: Sequelize.INTEGER, allowNull: false },
    acc_comentarios: { type: Sequelize.STRING, allowNull: true },
    acc_status: { type: Sequelize.STRING, allowNull: true }
}, {
    timestamps: false


});

module.exports = Accesorio;