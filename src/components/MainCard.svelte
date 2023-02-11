<div class="main-card">
  <slot></slot>
</div>

<style>
	.main-card {
    display: flex;
    flex: column;
		position: relative;
    --height: 500px;
    /* width: 100%; */
		width: calc((var(--g-ratio) * var(--height)) + 80px);
		height: var(--height);
    box-shadow: var(--box-shadow);
		background: var(--color-bg-1);
    border-radius: .5em;
    margin: 2rem auto;
    transition: all .2s ease-in-out;
	}

  /* Styling for nested elements in the main cards */

  .main-card :global(h1) {
    font-size: 2em;
    padding: 2rem 0 0 2rem;
    margin: 0;
  }

  .main-card:hover {
    transform: translateY(-4px);
    transition: all .2s ease-in-out;
  }

</style>