<script lang="ts">
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import Button from '../ui/button/button.svelte';
	import { page as pageStore } from '$app/stores';

	export let count: number;
	export let perPage: number;
	export let page: number;
	$: totalPages = Math.ceil(count / perPage);

	// persist all other query parameters to keep e.g. search, sorting...
	$: link = (page: number) => {
		const search = new URLSearchParams($pageStore.url.searchParams);
		search.set('page', page.toString());
		return `?${search}`;
	};
</script>

<Pagination.Root {page} {count} {perPage} let:pages let:currentPage>
	<Pagination.Content>
		<Pagination.Item>
			<Pagination.PrevButton href={page > 1 ? link(page - 1) : ''}>
				<ChevronLeft class="h-4 w-4" />
				<span class="hidden sm:block">Previous</span>
			</Pagination.PrevButton>
		</Pagination.Item>
		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
			{:else}
				<Pagination.Item>
					<Button
						variant={currentPage == page.value ? 'default' : 'outline'}
						href={link(page.value)}>{page.value}</Button
					>
				</Pagination.Item>
			{/if}
		{/each}
		<Pagination.Item>
			<Pagination.NextButton href={page < totalPages ? link(page + 1) : ''}>
				<span class="hidden sm:block">Next</span>
				<ChevronRight class="h-4 w-4" />
			</Pagination.NextButton>
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
