const Sequelize = require('sequelize');
const db = require('../config/database');

var Elemento = db.define('elementos', {

    id_elemento: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    elem_nombre: { type: Sequelize.STRING, allowNull: false },

}, {
    timestamps: false


});

module.exports = Elemento;