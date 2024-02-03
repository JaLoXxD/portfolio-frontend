<template>
	<div class="knowledgesContainer">
		<HabilitiesTitle text="Otras" />
		<div class="cont">
			<Card :percent="75" :title="'SQL'" :image="'sql'" :description="'Modelado y manejo de bases de datos'" />
			<Card :percent="60" :title="'NoSQL'" :image="'mongodb'" :description="'Modelado y manejo de bases de datos'" />
			<Card :percent="90" :title="'JavaScript'" :image="'js'" :description="'FrontEnd y BackEnd'" />
			<Card :percent="55" :title="'Git'" :image="'git'" :description="'Proyectos en grupo de trabajo'" />
		</div>
	</div>
</template>

<script>
	import Card from "./Card.vue";
	import HabilitiesTitle from "./HabilitiesTitle.vue";

	export default {
		name: "OtherHabilities",
		components: {
			Card,
			HabilitiesTitle,
		},
	};
</script>

<style scoped>
	.cont {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.knowledgesContainer {
		display: flex;
		flex-direction: column;
		margin-top: 50px;
		width: 100%;
	}
	.title2 {
		font-size: 40px;
	}
	ul {
		list-style-type: "▶ ";
	}
	li {
		color: #31ddb2;
	}
	li span {
		color: #8690ad;
	}
	@media (min-width: 0px) and (max-width: 480px) {
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 50px;
		}
	}
	@media (min-width: 361px) and (max-width: 480px) {
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 50px;
		}
	}
	@media (min-width: 601px) and (max-width: 742px) {
		.title {
			text-align: center;
			margin-left: 0px;
		}
	}
	@media (min-width: 743px) and (max-width: 900px) {
		.title {
			text-align: center;
			margin-left: 0px;
		}
		.title2 {
			font-size: 30px;
		}
	}
	@media (min-width: 901px) and (max-width: 1390px) {
		.title {
			text-align: center;
			margin-left: 0px;
		}
	}
</style>
