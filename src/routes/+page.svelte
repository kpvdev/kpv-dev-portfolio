<script>
	import Counter from '../components/Counter.svelte';
	import MainCard from '../components/MainCard.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { Alert } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<h1 class="color-gradient-1 text-9xl">Home</h1>

<div class="p-9">
	<MainCard class="bg-[#ff49db]">
			<h1 class="color-gradient-1">iptables</h1>
	</MainCard>
	<MainCard> 
		<h1 class="color-gradient-1">survey</h1>
	</MainCard>
	<MainCard> 
		<h1 class="color-gradient-1">survey</h1>
	</MainCard>
	<MainCard> 
		<h1 class="color-gradient-1">survey</h1>
	</MainCard>
</div>