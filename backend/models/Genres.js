const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Genres = sequelize.define('genres', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
}, {
    paranoid: true, // Enable soft deletion
    timestamps: true,
  });

module.exports = Genres;
