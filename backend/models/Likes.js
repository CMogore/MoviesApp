const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movies = require ('./Movies.js');
const Users = require ('./Users.js');

const Likes = sequelize.define('likes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: 'id'
      }
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Movies,
        key: 'id'
      }
    },  
}, {
    paranoid: true, // Enable soft deletion
    timestamps: true,
  });

module.exports = Likes;
