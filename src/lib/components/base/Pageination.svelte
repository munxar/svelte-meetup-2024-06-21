<script context="module" lang="ts">
	export function paginiationController(search: URLSearchParams, count: number, pageSize = 10) {
		const page = parseInt(search.get('page') || '0');
		const from = page * pageSize;
		const to = (page + 1) * pageSize;
		const totalPages = Math.ceil(count / pageSize);

		const pages = Array.from({ length: totalPages }).map((_, i) => {
			const q = new URLSearchParams(search);
			q.set('page', i.toString());
			return {
				href: `?${q}`,
				label: `${i + 1}`,
				isActive: true,
				isCurrent: page === i,
				type: 'page'
			} as Page;
		});
		const currentPage = pages[page];
		const prevPage = page > 0 ? pages[page - 1] : currentPage;
		const nextPage = page < totalPages - 1 ? pages[page + 1] : currentPage;

		if (page === 0) {
			prevPage.isActive = false;
			prevPage.href = '';
		}
		if (page === totalPages - 1) {
			nextPage.isActive = false;
			nextPage.href = '';
		}

		return {
			count,
			from,
			to,
			pages,
			prevPage,
			nextPage
		};
	}

	export type Page = {
		href: string;
		label: string;
		isActive: boolean;
		isCurrent: boolean;
		type: 'page' | 'ellipsis';
	};
</script>

<script lang="ts">
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import Button from '../ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { Ellipsis } from 'lucide-svelte';

	export let pages: Page[];
	export let nextPage: Page;
	export let prevPage: Page;

	let className: string | undefined = undefined;
	export { className as class };
</script>

<nav class={cn('mx-auto flex w-full flex-col items-center', className)}>
	<ul class="flex flex-row items-center gap-1">
		<li>
			<Button variant={prevPage.isActive ? 'outline' : 'ghost'} href={prevPage.href}>
				<ChevronLeft class="h-4 w-4" />
				<span class="hidden sm:block">Prev</span>
			</Button>
		</li>

		{#each pages as page}
			<li>
				{#if page.type === 'ellipsis'}
					<span aria-hidden class="flex h-9 w-9 items-center justify-center">
						<Ellipsis class="h-4 w-4" />
						<span class="sr-only">More pages</span>
					</span>
				{:else}
					<Button variant={page.isCurrent ? 'default' : 'outline'} href={page.href}
						>{page.label}</Button
					>
				{/if}
			</li>
		{/each}

		<li>
			<Button variant={nextPage.isActive ? 'outline' : 'ghost'} href={nextPage.href} class="">
				<span class="hidden sm:block">Next</span>
				<ChevronRight class="h-4 w-4" />
			</Button>
		</li>
	</ul>
</nav>
