<template>
	<div class="knowledgesContainer">
		<h3 class="textGreenA">BackEnd</h3>
		<div class="cont">
			<Card :percent="50" :title="'Python'" :image="'Python'" :description="'Desarrollos de APIs'" />
			<Card :percent="50" :title="'PHP'" :image="'php'" :description="'Diseño y animaciones'" />
			<Card :percent="55" :title="'NodeJs'" :image="'node-js'" :description="'Paginas SPA'" />
		</div>
	</div>
</template>

<script>
	import Card from "../components/Card.vue";
	export default {
		name: "BackEndHabilities",
		components: {
			Card,
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
	.knowledgesContainer h3 {
		font-size: 50px;
		margin: 0 0 60px 0;
		font-weight: 900;
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
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 20px;
		}
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 50px;
		}
	}
	@media (min-width: 361px) and (max-width: 480px) {
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 20px;
		}
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 50px;
		}
	}
	@media (min-width: 481px) and (max-width: 600px) {
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 40px;
		}
	}
	@media (min-width: 601px) and (max-width: 742px) {
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 0;
		}
		.title {
			text-align: center;
			margin-left: 0px;
		}
	}
	@media (min-width: 743px) and (max-width: 900px) {
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 0;
		}
		.title {
			text-align: center;
			margin-left: 0px;
		}
		.title2 {
			font-size: 30px;
		}
	}
	@media (min-width: 901px) and (max-width: 1390px) {
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 0;
		}
		.title {
			text-align: center;
			margin-left: 0px;
		}
	}
</style>
