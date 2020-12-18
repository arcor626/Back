var Sequelize = require('sequelize');

module.exports = new Sequelize('Inventario', 'sa', 'mjyv2004', {
    host: 'localhost',
    dialect: 'mssql',
    options: {
        "enableArithAbort": true
    }
});