<script>
	import '../app.postcss';
	import Header from '../components/Header.svelte';
	import { Footer, FooterLinkGroup, FooterLink, ImagePlaceholder, TextPlaceholder, Skeleton, FooterCopyright } from 'flowbite-svelte'
	import Navbar from '../components/Navbar.svelte';
	import SocialBanner from '../components/SocialBanner.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<SocialBanner />