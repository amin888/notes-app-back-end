class NotesHandler {
	constructor(service) {
		this._service = service;
	}

	postNoteHandler(request, h) {
		const { title = "untitled", body, tags } = request.payload;

		const noteId = this._service.addNote({ title, body, tags });

		const response = h.response({
			status: "success",
			message: "Catatan berhasil ditambahkan",
			data: {
				noteId,
			},
		});
		response.code(201);
		return response;
	}

	getNotesHandler() {}

	getNoteByIdHandler() {}

	putNoteByIdHandler() {}

	deleteNoteByIdHanlder() {}
}
