const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movies = require ('./Movies.js');
const Genres = require('./Genres.js')

const MovieGenres = sequelize.define('movie_genres', {
    movie_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Movies,
        key: 'id'
      }
    },
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Genres,
        key: 'id'
      }
    }
}, {
    paranoid: true, // Enable soft deletion
    timestamps: true,
  });
module.exports = MovieGenres;