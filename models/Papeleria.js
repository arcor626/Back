const Sequelize = require('sequelize');
const db = require('../config/database');

var Papeleria = db.define('papelerias', {

    id_papeleria: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
    pape_fecha_compra: { type: Sequelize.DATEONLY, allowNull: true },
    fk_id_proveedor: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_marca: { type: Sequelize.INTEGER, allowNull: true },
    pape_producto: { type: Sequelize.INTEGER, allowNull: false },
    pape_paq: { type: Sequelize.INTEGER, allowNull: true },
    pape_piezas: { type: Sequelize.INTEGER, allowNull: true },
    pape_stock: { type: Sequelize.INTEGER, allowNull: true },
    fk_id_area: { type: Sequelize.INTEGER, allowNull: false },
    pape_comentarios: { type: Sequelize.STRING, allowNull: true },
    pape_status: { type: Sequelize.STRING, allowNull: true },
}, {
    timestamps: false


});

module.exports = Papeleria;