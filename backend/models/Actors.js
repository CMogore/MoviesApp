const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Actors = sequelize.define('actors', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
}, {
    paranoid: true, // Enable soft deletion
    timestamps: true,
  });
  


module.exports = Actors;