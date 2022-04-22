"use strict";

// IMPORTS ==================================================================================================
const { ER_API_NOT_FOUND } = require("../constants/errors.constants");

// METHODS ==================================================================================================
/**
 * Returns an error when requested API is not found.
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 * @returns 
 */
const apiNotFound = (req, res, next) => {
    if (req.body.error) return next();
    
    res.status(ER_API_NOT_FOUND.statusCode).send({
        errorCode: ER_API_NOT_FOUND.code,
        statusCode: ER_API_NOT_FOUND.statusCode,
        message: ER_API_NOT_FOUND.message,
        data: {},
    });
};

// EXPORTS ==================================================================================================
module.exports = apiNotFound;
