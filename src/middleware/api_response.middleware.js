"use strict";

// IMPORTS ==================================================================================================
const mung = require("express-mung");

// METHODS ==================================================================================================
/**
 * Unified response provider for all successful APIs
 * @param {object} body 
 * @param {object} req 
 * @param {object} res 
 * @returns 
 */
const apiResponse = (body, req, res) => ({
    statusCode: body.statusCode || 200,
    message: body.message || "Api successfully completed.",
    data: body.data || body,
});

// EXPORTS ==================================================================================================
module.exports = mung.json(apiResponse);
