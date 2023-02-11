<div class="navbar">
	<h2>Navigation</h2>
  <slot></slot>
</div>

<style>
	.navbar {
		position: fixed;
		width: 10rem;
		min-height: 100%;
		background: rgb(21, 24, 30);
	}

	h2 {
		text-align: center;
		font-size: 1rem;
		font-weight: 100;
		background-color: grey;
	}
</style>