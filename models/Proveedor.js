const Sequelize = require('sequelize');
const db = require('../config/database');

var Proveedor = db.define('proveedores', {

    id_proveedor: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    nombre_proveedor: { type: Sequelize.STRING, allowNull: true },
    
}, {
    timestamps: false


});

module.exports = Proveedor;