import { messages as rawMessage } from '$lib/db';

export const load = async ({ url: { searchParams, search } }) => {
	const q = searchParams.get('q');

	// this is not needed but shows the entire search
	console.log('search : ', search);

	const filteredMessages = rawMessage.filter((m) =>
		q ? m.message.toLowerCase().includes(q?.toLowerCase()) : true
	);

	// here we get the page
	const page = parseInt(searchParams.get('page') || '1');
	const pageSize = 100;
	const from = (page - 1) * pageSize;
	const to = page * pageSize;
	const messages = filteredMessages.slice(from, to);

	return {
		q,
		messages,
		pageSize,
		page,
		count: filteredMessages.length
	};
};
