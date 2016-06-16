const mysql = require('../config.js').mysql;
const Sequelize = require('sequelize');
console.log(mysql.host);
const sequelize = new Sequelize(mysql.database, mysql.user, mysql.pwd, {
	host: mysql.host,
	port: mysql.port,
	dialect: 'mysql',
	timezone: '+08:00',
	define: {
		timestamps: false,
		freezeTableName: true
	}
});


const dbServer = {
	select: function* (sql) {
		return yield sequelize.query(sql, { logging: process.env.NODE_ENV ? false : console.log, type: Sequelize.QueryTypes.SELECT});
	},
	update: function* (sql) {
		return yield sequelize.query(sql, {logging: process.env.NODE_ENV ? false : console.log, type: Sequelize.QueryTypes.BULKUPDATE });
	}
};

module.exports = {
	dbServer: dbServer
}