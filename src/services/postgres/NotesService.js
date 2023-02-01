const { Pool } = require("pg");

class NotesService {
	constructor() {
		this._pool = new Pool();
	}

	addNote({ title, body, tags }) {
		const id = nanoid(16);
		const createdAt = new Date().toISOString();
		const updatedAt = createdAt;

		const query = {
			text: "INSERT INTO notes VALUES($1, $2, $3, $4, $5, $6) RETURNING id",
			values: [id, title, body, tags, createdAt, updatedAt],
		};
	}
}
