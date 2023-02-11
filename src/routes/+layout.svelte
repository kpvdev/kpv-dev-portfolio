<script>
	import '../app.postcss';
	import Header from '../components/Header.svelte';
	import { Footer, FooterLinkGroup, FooterLink, ImagePlaceholder, TextPlaceholder, Skeleton, FooterCopyright } from 'flowbite-svelte'
	import Navbar from '../components/Navbar.svelte';
	import SocialBanner from '../components/SocialBanner.svelte';
	// import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer class="bottom-0 left-0 z-20 w-full">
  <FooterCopyright href="/" by="Flowbite™" year={2022} />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>

<SocialBanner />