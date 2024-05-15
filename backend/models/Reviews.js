const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movies = require ('./Movies.js');
const Users = require ('./Users.js');


const Reviews = sequelize.define('reviews', {
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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT
    },  
}, {
    paranoid: true, // Enable soft deletion
    timestamps: true,
  });

module.exports = Reviews;
