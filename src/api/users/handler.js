const ClientError = require("../../exceptions/ClientError");

class UsersHandler {
	constructor(service, validator) {
		this._service = service;
		this._validator = validator;
	}

	async postUserHandler(request, h) {
		try {
			this._validator.validateUserPayload(request.payload);
			const { username, password, fullname } = request.payload;

			const userId = await this._service.addUser({ username, password, fullname });
		} catch (error) {
			if (error instanceof ClientError) {
				const response = h.response({
					status: "fail",
					message: error.messge,
				});
				response.code(error.statusCode);
				return response;
			}

			// Server ERROR!
			const response = h.response({
				status: "error",
				message: "Maaf, terjadi kegagalan pada server kami.",
			});
			response.code(500);
			console.error(error);
			return response;
		}
	}
}
