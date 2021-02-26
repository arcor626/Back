const Sequelize = require('sequelize');
const db = require('../config/database');

var Marcas = db.define('marcas', {

    id_marca: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    marca_nombre: { type: Sequelize.STRING, allowNull: false },

}, {
    timestamps: false


});

module.exports = Marcas;