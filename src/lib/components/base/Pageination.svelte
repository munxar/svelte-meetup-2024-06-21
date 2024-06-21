<script lang="ts">
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import Button from '../ui/button/button.svelte';

	export let count: number;
	export let perPage: number;
</script>

<Pagination.Root {count} {perPage} siblingCount={10} let:pages let:currentPage>
	<Pagination.Content>
		<Pagination.Item>
			<Pagination.PrevButton>
				<ChevronLeft class="h-4 w-4" />
				<a href="?page={currentPage - 1}" class="hidden sm:block">Previous</a>
			</Pagination.PrevButton>
		</Pagination.Item>
		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
			{:else}
				<Pagination.Item>
					<Button variant={'outline'} href="?page={page.value}">{page.value}</Button>
				</Pagination.Item>
			{/if}
		{/each}
		<Pagination.Item>
			<Pagination.NextButton>
				<a href="?page={currentPage + 1}" class="hidden sm:block">Previous</a>
				<ChevronRight class="h-4 w-4" />
			</Pagination.NextButton>
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
