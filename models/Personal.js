const Sequelize = require('sequelize');
const db = require('../config/database');

var Personal = db.define('personals', {

    id_personal: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    personal_nombre: { type: Sequelize.STRING, allowNull: false },
    personal_apellidos: { type: Sequelize.STRING, allowNull: false }
    
}, {
    timestamps: false


});

module.exports = Personal;