const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('moviesApp', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql' // Use the appropriate database dialect
  });
module.exports = sequelize;

