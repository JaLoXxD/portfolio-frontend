<template>
	<h2 class="title mt-5">Habilidades</h2>
	<div class="knowledgesContainer">
		<HabilitiesTitle text="Front-End" />
		<div class="cont">
			<Card :percent="80" :title="'HTML'" :image="'html'" :description="'Construcción de estucturas de páginas web'" />
			<Card :percent="70" :title="'CSS'" :image="'css'" :description="'Diseño y animaciones'" />
			<Card :percent="70" :title="'VueJs'" :image="'vuejs'" :description="'Paginas SPA'" />
			<Card :percent="50" :title="'React'" :image="'react'" :description="'Paginas SPA'" />
			<Card :percent="40" :title="'Angular'" :image="'angularjs'" :description="'Paginas SPA'" />
		</div>
	</div>
</template>

<script>
	import Card from "./Card.vue";
	import HabilitiesTitle from "./HabilitiesTitle.vue";
	export default {
		name: "FrontEndHabilities",
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
	.title {
		font-size: 70px;
		text-align: center;
		font-weight: 900;
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

	@media (min-width: 901px) and (max-width: 1390px) {
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 45px;
		}
	}
	@media (min-width: 743px) and (max-width: 900px) {
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 45px;
		}
		.title2 {
			font-size: 30px;
		}
	}
	@media (min-width: 601px) and (max-width: 742px) {
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 45px;
			font-weight: 700;
		}
	}
	@media (min-width: 361px) and (max-width: 480px) {
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 50px;
		}
	}
	@media (min-width: 0px) and (max-width: 480px) {
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 26px;
		}
	}
</style>
