<template>
	<footer>
		<p>Diseñado y construido por Jorge Hidalgo <br> &copy;Copyright {{getYear}}</p>
	</footer>
</template>

<script>
import { mapGetters } from 'vuex';
	export default {
		name: "Footer",
		computed: {
			...mapGetters(['getYear']),
		}
	};
</script>

<style scoped>
	footer {
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #002142;
		color: white;
		text-align: center;
		display: flex;
		justify-content: center;
		border-top: 2px solid #31ddb2;
		margin-top: 55px;
		display: flex;
	}
	footer p {
		font-size: 25px;
		margin: 40px 0 40px 0;
	}
	@media (min-width: 0px) and (max-width: 600px) {
		footer {
			margin: 0 auto;
			width: 70%;
			border-top: 2px solid #31ddb2;
		}
		footer p {
			font-size: 15px;
		}
	}
</style>
