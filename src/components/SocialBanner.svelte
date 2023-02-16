<script>
	import github from '$lib/images/github.svg';
</script>

<footer>
  <p>Maintained by <a href="mailto:kpvdev.portfolio@proton.me" class="color-gradient-1" target="_blank">Kyle Vincent</a>. Built with <a href="https://svelte.dev" class="--color-theme-1" target="_blank" rel="noreferrer">SvelteKit</a>.</p>
	<div class="social">
		<a href="https://github.com/kpvdev">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;
		align-items: center;
		position: absolute;
    	bottom: 0px;
    	width: 100%;
	}

	@media (min-width: 480px) {
		footer {
			padding: 2rem;
		}
	}

	p {
		font-size: .8rem;
	}

	.social {
		width: 2em;
		height: 2em;
	}
</style>