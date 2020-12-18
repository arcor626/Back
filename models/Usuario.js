const Sequelize = require('sequelize');
const db = require('../config/database');

var Usuario = db.define('usuario', {
    id_usuario: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    usuario_nombre: { type: Sequelize.STRING, allowNull: false },
    usuario_correo: { type: Sequelize.STRING, allorNull: false },
    usuario_pasword: { type: Sequelize.STRING, allowNull: true }
}, {
    timestamps: false
});

module.exports = Usuario;