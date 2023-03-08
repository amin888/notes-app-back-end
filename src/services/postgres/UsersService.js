const { Pool } = require("pg");
const InvariantError = require("../../exceptions/InvariantError");

class UsersService {
	constructor() {
		this._pool = new Pool();
	}

	async addUser({ username, password, fullname }) {
		// TODO: verifikasi username, pastikan  belum terdaftar
		await this.verifyNewUsername(username);
		const id = `user-${nanoid(16)}`;
		// TODO: bila verifikasi lolos, maka masukkan user baru ke database
	}

	async verifyNewUsername(username) {
		const query = {
			text: "SELECT username FROM users WHERE username = $1",
			values: [username],
		};
		const result = await this._pool.query(query);

		if (result.rows.length > 0) {
			throw new InvariantError("Gagal menambahkan user. Username sudah diguanakan.");
		}
	}
}
