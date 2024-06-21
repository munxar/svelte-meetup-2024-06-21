import { messages as rawMessage } from '$lib/db';

export const load = async ({ url }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const pageSize = 100;
	const from = (page - 1) * pageSize;
	const to = page * pageSize;
	const messages = rawMessage.slice(from, to);

	return {
		messages,
		pageSize,
		count: rawMessage.length
	};
};
