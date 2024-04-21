<script>
	import Picker from "$lib/components/Picker.svelte";
	import PickList from "$lib/components/PickList.svelte";
</script>

<main>
	<h1>🎲 Randpipe</h1>
	<p>
		Randpipe hace una selección aleatoria de la lista de opciones provista. Es ideal para elegir
		participantes de una clase, o ganadores de un sorteo, o integrantes de un equipo.
	</p>
	<p>
		Esta herramienta es parte de una pipeline de integración continua realizada como parte de la
		cursada de Ingeniería y Calidad de Software en la Facultad Regional Resistencia de la UTN.
	</p>

	<div class="picker-container">
		<Picker />
		<PickList />
	</div>
</main>

<style>
	.picker-container {
		display: flex;
		justify-content: center;
		gap: 100px;

		@media (max-width: 500px) {
			flex-direction: column;
			gap: 10px;
		}
	}
</style>
