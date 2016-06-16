module.exports = {
	mysql: process.env.NODE_ENV === "production" ? {
		host: '127.0.0.1',
		database: 'dmp_server',
		user: 'developer',
		pwd: 'gdas.developer',
		port: 3305
	} : {
		host: '127.0.0.1',
		database: 'dmp_server',
		user: 'developer',
		pwd: 'gdas.developer',
		port: 3305
	}
};