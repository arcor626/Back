const Sequelize = require('sequelize');
const db = require('../config/database');

var Insumo = db.define('insumos', {

    id_insumo: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
    ins_fecha_compra: { type: Sequelize.DATEONLY, allowNull: true },
    fk_id_proveedor: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_marca: { type: Sequelize.INTEGER, allowNull: true },
    ins_producto: { type: Sequelize.INTEGER, allowNull: false },
    ins_paq: { type: Sequelize.INTEGER, allowNull: true },
    ins_piezas: { type: Sequelize.INTEGER, allowNull: true },
    ins_stock: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_area: { type: Sequelize.INTEGER, allowNull: false },
    ins_comentarios: { type: Sequelize.STRING, allowNull: true },
    ins_status: { type: Sequelize.BOOLEAN, allowNull: true }
}, {
    timestamps: false


});

module.exports = Insumo;