'use strict';

const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    // ... other fields ...
    password: {
      type: Sequelize.STRING,
      allowNull: true, // Changed from false to true
    },
    // ... other fields ...
  }, {
    timestamps: true,
  });
  return User;
};