<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	export let q: string | null;
</script>

<form class="flex w-full max-w-sm items-center space-x-2">
	<Input name="q" type="search" placeholder="Search..." value={q} />
	<Button type="submit">Search</Button>
	<Button variant="link" href="?">Reset</Button>
</form>
