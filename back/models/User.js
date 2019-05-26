'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    user: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};