"use strict";

// IMPORTS ==================================================================================================
const { createLogger, format, transports } = require("winston");

// LOGICS ===================================================================================================
const logger = createLogger({
	transports: [
		new transports.File({
			filename: "logs/error.log",
			level: "error",
			format: format.combine(
				format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				format.json(),
			),
		}),
	],
});

// EXPORTS ==================================================================================================
module.exports = logger;
