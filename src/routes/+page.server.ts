import { paginiationController } from '$lib/components/base/Pageination.svelte';
import { messages as rawMessage } from '$lib/db';

export const load = async ({ url: { searchParams } }) => {
	const q = searchParams.get('q');

	const filterdMessages = rawMessage.filter((m) =>
		q ? m.message.toLowerCase().includes(q?.toLowerCase()) : true
	);
	const pagination = paginiationController(searchParams, filterdMessages.length);
	const messages = filterdMessages.slice(pagination.from, pagination.to);

	return {
		q,
		messages,
		pagination
	};
};
