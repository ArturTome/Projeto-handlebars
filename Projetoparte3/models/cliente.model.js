const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reserva = require('./reserva.model');

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Cliente.hasMany(Reserva, {
    foreignKey: 'cliente_id',
    onDelete: 'CASCADE'
});

module.exports = Cliente;

