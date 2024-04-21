<script>
	let text = "";
	import { picks } from "$lib/stores";

	function updatePicks() {
		const newPicks = text
			.trim()
			.split("\n")
			.filter((p) => p !== "");
		picks.set(newPicks);
		text = newPicks.join("\n");
	}

	updatePicks();
</script>

<div>
	<label for="options">Opciones:</label>
	<textarea
		id="options"
		name="options"
		aria-label="options"
		placeholder="Una opción por linea"
		bind:value={text}
		on:change={updatePicks}
	/>
</div>

<style>
	div {
		max-width: 600px;
		width: 350px;
	}

	label {
		font-size: 1.2em;
	}

	textarea {
		width: 100%;
		height: 200px;
		resize: vertical;
		margin-top: 5px;
	}
</style>
