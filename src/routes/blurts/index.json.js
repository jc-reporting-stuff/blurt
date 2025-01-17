import { api } from './_api';

// GET /locations.json
export const get = async (request) => {
	const response = await api(request, 'blurts');
	if (response.status === 404) {
		// no blurts!
		// start with an empty array
		return { body: [] };
	}
	return response;
};

// POST /locations.json
export const post = async (request) => {
	if (request.body.blurt === '') {
		return {
			status: 200,
			body: {}
		};
	}
	const response = await api(request, '/blurts', {
		username: request.body.username,
		blurt: request.body.blurt
	});
	return response;
};
