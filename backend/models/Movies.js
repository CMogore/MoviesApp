const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movies = sequelize.define('movies', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    director: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    poster_url: {
      type: DataTypes.STRING(255)
    },
    trailer_url: {
      type: DataTypes.STRING(255)
    },
}, {
    paranoid: true, // Enable soft deletion
    timestamps: true,
  });

module.exports = Movies;
