const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Roles = require('./Roles.js')


const Users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100)
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: Roles,
        key: 'id'
      }
    }
}, {
    paranoid: true, // Enable soft deletion
    timestamps: true,
    
  });
  
module.exports = Users;