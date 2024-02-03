<template>
	<div class="knowledgesContainer">
		<HabilitiesTitle text="Back-End" />
		<div class="cont">
			<Card :percent="50" :title="'Python'" :image="'Python'" :description="'Desarrollo de APIs'" />
			<Card :percent="80" :title="'Java'" :image="'java'" :description="'Desarrollo de APIs y microservicios'" />
			<Card :percent="75" :title="'NodeJs'" :image="'node-js'" :description="'Desarrollo de APIs y web scraping'" />
		</div>
	</div>
</template>

<script>
	import Card from "./Card.vue";
	import HabilitiesTitle from "./HabilitiesTitle.vue";
	export default {
		name: "BackEndHabilities",
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
	@media (min-width: 481px) and (max-width: 600px) {
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
