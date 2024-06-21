<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index';
	import { Progress } from '$lib/components/ui/progress/index';
</script>

<h1>Welcome to SvelteKit</h1>
<Button>Hello Meetup</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="link" size="sm">A Link</Button>
<Button variant="link" size="xs" class="text-purple-500">very small Link</Button>

<Card.Root class="w-44">
	<Card.Header class="pb-2">
		<Card.Description>This Week</Card.Description>
		<Card.Title class="text-4xl">$1329</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="text-xs text-muted-foreground">+25% from last week</div>
	</Card.Content>
	<Card.Footer>
		<Progress value={25} aria-label="25% increase" />
	</Card.Footer>
</Card.Root>
