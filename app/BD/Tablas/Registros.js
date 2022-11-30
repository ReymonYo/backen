const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../conexion');
const Registros = sequelize.define('registros', {
    IDpersona: {
        type: Sequelize.DataTypes.INTEGER,
primaryKey: true, 
autoIncrement: true
    },
    Nombre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    ApellidoP: {
type: Sequelize.DataTypes.STRING,
allowNull: false
    },
    ApellidoM: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Correo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Telefono: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Matricula: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
});