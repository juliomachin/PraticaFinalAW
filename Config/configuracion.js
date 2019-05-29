const Sequelize = require('sequelize');
const db = {}
const sequelize = new Sequelize('cine','Jorge','1234',{
	
	dialect:'mysql',
  host: '192.168.56.101',
  operatorAliases: false,
	define:{
		timestamps: false
  },
  
  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
