const Sequelize = require('sequelize');

module.exports = new Sequelize('cine','Jorge','1234',{
	
	dialect:'mysql',
	host: '192.168.56.101',
	define:{
		timestamps: false
	}

});