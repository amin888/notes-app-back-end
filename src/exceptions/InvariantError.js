const ClientError = require("./ClientError");

class InvariantError extends ClientError {
	// no need add status code 400 because already default
	constructor(message) {
		super(message);
		this.name = "InvariantError";
	}
}

module.exports = InvariantError;
