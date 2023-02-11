<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/resources' ? 'page' : undefined}>
				<a href="/resources">Resources</a>
			</li>
			<li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
				<a href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: relative;
		justify-content: center;
		text-align: center;
		align-items: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 4em;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		display: flex;
		align-items: flex-start;
		flex-direction: row;
		gap: 1rem;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 8px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-2);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 200;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.3em;
		text-decoration: none;
		transition: all 600ms ease;
	}

	a:hover {
		background-image:linear-gradient(to right,#3b82f6,#ef4444);
		-webkit-background-clip:text;
		background-clip:text;
		color:transparent;
	}
</style>
