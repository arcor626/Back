const Sequelize = require('sequelize');
const db = require('../config/database');

var Servicio = db.define('servicios', {

    id_servicio: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    serv_nombre: { type: Sequelize.STRING, allowNull: false },
    
}, {
    timestamps: false


});

module.exports = Servicio;