<script>
	import MainCard from '../../components/MainCard.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h1 class="color-gradient-1">About</h1>

<section>
	<MainCard />
	<div class="text-column">
		<p>
			This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
			following into your command line and following the prompts:
		</p>

		<pre>npm create svelte@latest</pre>

		<p>
			The page you're looking at is purely static HTML, with no client-side interactivity needed.
			Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
			the devtools network panel and reloading.
		</p>
	</div>
</section>

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	} */
</style>