<script>
	import { picks } from "$lib/stores";
	import { fade } from "svelte/transition";

	// Most recent pick value.
	let picked = "";
	// Aux for transitioning even when last pick is equal to new pick.
	let transition = false;

	/** @param {string[]} list */
	function pickAtRandom(list) {
		const rand = Math.floor(Math.random() * list.length);
		return list.at(rand) ?? "";
	}

	function handlePick() {
		picked = pickAtRandom($picks);
		transition = !transition;
	}
</script>

<div>
	<button id="picker" on:click={handlePick}>Seleccionar</button>
	<p>Resultado:</p>
	{#key transition}
		<p id="picked" title="picked" transition:fade>{picked}</p>
	{/key}
</div>

<style>
	div {
		display: flex;
		width: 200px;
		flex-direction: column;
		align-items: center;
		margin-top: 60px;
	}

	button {
		padding: 8px 16px;
		border-radius: 5px;
		width: fit-content;
		border: black 1px solid;
		background: var(--blue);
		transition: background 100ms;
		font-size: 1.2em;

		&:hover {
			box-shadow: 1px 2px 2px 1px var(--blue);
			cursor: pointer;
		}
		&:focus {
			box-shadow: 1px 2px 2px 1px var(--blue);
			outline: auto;
		}

		&:active {
			background: var(--green);
		}
	}

	#picked {
		text-decoration: underline black 3px solid;
		margin: 0;
		padding: 10px;
	}
</style>
