<script lang="ts">
	import Pagination from '$lib/components/base/Pagination.svelte';
	import Search from '$lib/components/base/Search.svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Info from 'lucide-svelte/icons/info';
	import * as Alert from '$lib/components/ui/alert';
	export let data;
</script>

<div class="p-8">
	<Search q={data.q} />
	{#if data.messages.length > 0}
		<Table.Root>
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
		<Pagination {...data.pagination} />
	{:else}
		<Alert.Root class="mt-8">
			<Info class="h-4 w-4" />
			<Alert.Title>Nothing found for "{data.q}"</Alert.Title>
			<Alert.Description>
				<Button href="?" variant="link">Try another search</Button>
			</Alert.Description>
		</Alert.Root>
	{/if}
</div>
