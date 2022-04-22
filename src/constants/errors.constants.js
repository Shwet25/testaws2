"use strict";

// METHODS ==================================================================================================
/**
 * Common method for generating a new error.
 * @param {string} code 
 * @param {string} message 
 * @param {number} statusCode 
 * @returns 
 */
const makeError = (code, message, statusCode) => {
    const error = new Error(message);
    error.code = code;
    error.statusCode = statusCode;
    Error.captureStackTrace(error);
    return error;
};

// ERROR DEFINITIONS ========================================================================================
// TYPE CONSTANTS
exports.ER_API_NOT_FOUND = makeError("ER_API_NOT_FOUND", "API you are trying to access, does not exist.", 400);
exports.ER_BAD_REQUEST = makeError("ER_BAD_REQUEST", "Bad request.", 400);
exports.ER_USER_BLOCKED = makeError("ER_USER_BLOCKED", "This user has been blocked. Please contact support.", 401);
exports.ER_UNAUTHENTICATED_USER = makeError("ER_UNAUTHENTICATED_USER", "This api request was unauthenticated. Please login to continue.", 401);

// TYPE METHODS
exports.ER_FIELD_EMPTY = (field) => makeError("ER_FIELD_EMPTY", `"${field}" field cannot be empty.`, 406);
exports.ER_DATA_ALREADY_EXISTS = (field) => makeError("ER_DATA_ALREADY_EXISTS", `This ${field} already exists with us.`, 406);
exports.ER_DATA_NOT_FOUND = (entity) => makeError("ER_DATA_NOT_FOUND", `This ${entity} does not exist with us.`, 401);