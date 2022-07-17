<template>
	<h3 class="textGreenA">{{ text }}</h3>
</template>

<script>
	export default {
		name: "HabilitiesTitle",
		props: {
			text: String,
		},
	};
</script>

<style lang="css" scoped>
	h3 {
		font-size: 50px;
		margin: 0 0 60px 0;
		font-weight: 900;
	}
	@media (max-width: 1390px) {
		h3 {
			font-size: 40px;
			margin: 0 0 20px 0;
		}
	}
	@media (max-width: 900px) {
		h3 {
			font-size: 40px;
			margin: 0 0 20px 0;
		}
	}
	@media (max-width: 742px) {
		h3 {
			font-size: 40px;
			margin: 0 0 20px 0;
		}
	}
	@media (max-width: 600px) {
		h3 {
			font-size: 40px;
			margin: 0 0 20px 40px;
		}
	}
	@media (max-width: 480px) {
		h3 {
			font-size: 24px;
			text-align: center;
			margin: 0;
		}
	}
</style>
