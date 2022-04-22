"use strict";

// IMPORTS ==================================================================================================
require("dotenv").config();

// VARIABLE'S STRUCTURE =====================================================================================
const env = {
	serverConfig: {
		port: parseInt(process.env.SERVER_PORT) || 3000,
	},
	databaseConfig: {
		host: process.env.DB_HOST,
		port: parseInt(process.env.DB_PORT) || 5432,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	},
	jwtConfig: {
		jwtSecret: process.env.JWT_SECRET,
		expiresIn: `${(parseInt(process.env.EXPIRES_IN) * 60).toString()}s`,
	},
};

// EXPORTS ==================================================================================================
module.exports = env;
