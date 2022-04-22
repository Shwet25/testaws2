"use strict";

// IMPORTS ==================================================================================================
const { Pool } = require("pg");
const { databaseConfig } = require("../../config");

// Connection
const pool = new Pool({
	host: databaseConfig.host,
	port: databaseConfig.port,
	user: databaseConfig.user,
	password: databaseConfig.password,
	database: databaseConfig.database,
});

class Connection {
	async connect() {
		this.client = await pool.connect();
	}

	release() {
		this.client.release();
	}

	async begin() {
		await this.client.query("BEGIN");
	}

	async commit() {
		await this.client.query("COMMIT");
	}

	async rollback() {
		await this.client.query("ROLLBACK");
	}

	async execute(query) {
		return this.client.query(query);
	}
}

// const db = {
// 	/**
// 	 * connection
// 	 * @returns
// 	 */
// 	connect: async () => await pool.connect(),

// 	/**
// 	 * release
// 	 * @returns
// 	 */
// 	release: (client) => {
// 		client.release();
// 	},

// 	/**
// 	 * Beginnig query session
// 	 */
// 	begin: async (client) => {
// 		await client.query("BEGIN");
// 	},

// 	/**
// 	 * Commit query if api success
// 	 */
// 	commit: async (client) => {
// 		await client.query("COMMIT");
// 	},

// 	/**
// 	 * Rollback if api fails for any reason
// 	 */
// 	rollback: async (client) => {
// 		await client.query("ROLLBACK");
// 	},

// 	/**
// 	 * Common method for query execution.
// 	 * @param {object} client
// 	 * @param {string} query
// 	 * @returns
// 	 */
// 	execute: async (client, query) => await client.query(query),
// };

module.exports = Connection;
