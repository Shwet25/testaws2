"use strict";

// IMPORTS ==================================================================================================
const { userService } = require("../services");
const { ER_FIELD_EMPTY } = require("../constants/errors.constants");
const Connection = require("../includes/database_connection");

// CONTROLLERS ==============================================================================================
/**
 * List all users - controller
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const getAllUsers = async (req, res, next) => {
	const con = req._con;

	try {
		const response = await userService.getAllUsers(con);
		con.release();
		res.send(response);
	} catch (error) {
		con.release();
		next(error);
	}
};

/**
 * Add new user - controller
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const addUser = async (req, res, next) => {
	const con = new Connection();
	await con.connect();
	await con.begin();

	try {
		// Validations
		if (!req.body.username) throw ER_FIELD_EMPTY("username");
		if (!req.body.email) throw ER_FIELD_EMPTY("email");
		if (!req.body.password) throw ER_FIELD_EMPTY("password");

		const response = await userService.addUser(con, req.body);

		await con.commit();
		con.release();

		res.send(response);
	} catch (error) {
		await con.rollback();
		con.release();

		next(error);
	}
};

/**
 * Login user - controller
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const userLogin = async (req, res, next) => {
	const con = new Connection();
	await con.connect();
	await con.begin();

	try {
		// Validations
		if (!req.body.email) throw ER_FIELD_EMPTY("email");
		if (!req.body.password) throw ER_FIELD_EMPTY("password");

		const response = await userService.userLogin(con, req.body);

		await con.commit();
		con.release();

		res.send(response);
	} catch (error) {
		await con.rollback();
		con.release();

		next(error);
	}
};

/**
 * Logout user - controller
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const userLogout = async (req, res, next) => {
	const con = req._con;
	await con.begin();

	try {
		const response = await userService.userLogout(con, req._id);

		await con.commit();
		con.release();

		res.send(response);
	} catch (error) {
		await con.rollback();
		con.release();

		next(error);
	}
};

// EXPORTS ==================================================================================================
module.exports = {
	getAllUsers,
	addUser,
	userLogin,
	userLogout,
};
