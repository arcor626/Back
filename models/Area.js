const Sequelize = require('sequelize');
const db = require('../config/database');

var Area = db.define('areas', {

    id_area: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false },
    area_nombre: { type: Sequelize.STRING, allowNull: false },
    
}, {
    timestamps: false


});

module.exports = Area;