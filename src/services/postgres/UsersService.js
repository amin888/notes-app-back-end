const { Pool } = require("pg");

class UsersService {
	constructor() {
		this._pool = new Pool();
	}

	async addUser({ username, password, fullname }) {}
}
