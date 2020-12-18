const Sequelize = require('sequelize');
const db = require('../config/database');

var Limpieza = db.define('limpiezas', {

    id_limpieza: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
    limp_fecha_compra: { type: Sequelize.DATEONLY, allowNull: true },
    fk_id_proveedor: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_marca: { type: Sequelize.INTEGER, allowNull: true },
    limp_producto: { type: Sequelize.INTEGER, allowNull: false },
    limp_paq: { type: Sequelize.INTEGER, allowNull: true },
    limp_piezas: { type: Sequelize.INTEGER, allowNull: true },
    limp_stock: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_area: { type: Sequelize.INTEGER, allowNull: false },
    limp_comentarios: { type: Sequelize.STRING, allowNull: true },
    limp_status: { type: Sequelize.STRING, allowNull: true },
}, {
    timestamps: false


});

module.exports = Limpieza;