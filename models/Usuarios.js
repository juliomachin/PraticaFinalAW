const Sequelize = require('sequelize')
const db = require('../Config/configuracion.js')

module.exports = db.sequelize.define(
  'tbl_Usuarios',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user: {
      type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    nombre: {
        type: Sequelize.STRING
    },
    apellidos: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)