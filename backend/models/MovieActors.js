const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movies = require ('./Movies.js');
const Actors = require('./Actors.js')

const MovieActors = sequelize.define('movie_actors', {
    movie_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Movies,
        key: 'id'
      }
    },
    actor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Actors,
        key: 'id'
      }
    }
}, {
    paranoid: true, // Enable soft deletion
    timestamps: true,
  });

module.exports = MovieActors;
