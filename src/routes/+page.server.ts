import { paginiationController } from '$lib/components/base/Pagination.svelte';
import { messages as rawMessage } from '$lib/db';

export const load = async ({ url: { searchParams } }) => {
	const q = searchParams.get('q');

	const filteredMessages = rawMessage.filter((m) =>
		q ? m.message.toLowerCase().includes(q?.toLowerCase()) : true
	);
	const pagination = paginiationController(searchParams, filteredMessages.length);
	const messages = filteredMessages.slice(pagination.from, pagination.to);

	return {
		q,
		messages,
		pagination,
		count: filteredMessages.length
	};
};
