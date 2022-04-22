"use strict";

// IMPORTS ==================================================================================================
const { ER_BAD_REQUEST } = require("../constants/errors.constants");
const logger = require("../helpers/logger");

// METHODS ==================================================================================================
/**
 * Unified error handler
 * @param {object} error
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const errorHandling = (error, req, res, next) => {
	let response = {};
	if (error) {
		response = {
			errorCode: error.code || ER_BAD_REQUEST.code,
			statusCode: error.statusCode || ER_BAD_REQUEST.statusCode,
			message: error.message || ER_BAD_REQUEST.message,
			data: {},
		};
	} else {
		response = {
			errorCode: ER_BAD_REQUEST.code,
			statusCode: ER_BAD_REQUEST.statusCode,
			message: ER_BAD_REQUEST.message,
			data: {},
		};
	}

	logger.error(response.errorCode);
	res.status(error.statusCode || ER_BAD_REQUEST.statusCode).send(response);
};

// EXPORTS ==================================================================================================
module.exports = errorHandling;
