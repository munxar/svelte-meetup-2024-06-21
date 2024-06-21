<script lang="ts">
	import Pageination from '$lib/components/base/Pageination.svelte';
	import * as Table from '$lib/components/ui/table/index.js';

	export let data;
</script>

<div class="p-8">
	<Table.Root>
		<Table.Caption>A list of your recent invoices.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-4">ID</Table.Head>
				<Table.Head>Code</Table.Head>
				<Table.Head>Message</Table.Head>
				<Table.Head>URL</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each data.messages as message (message.id)}
				<Table.Row>
					<Table.Cell class="font-medium">{message.id}</Table.Cell>
					<Table.Cell class="text-right">{message.code}</Table.Cell>
					<Table.Cell>{message.message}</Table.Cell>
					<Table.Cell>{message.url}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
	<Pageination perPage={data.pageSize} count={data.count} />
</div>
