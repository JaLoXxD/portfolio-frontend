<template>
	<div class="sectionTitle">
		<h2 class="textGreenA title sectionTitle1">{{ Text }}</h2>
		<div class="line"></div>
	</div>
</template>

<script>
	export default {
		name: "Title",
		props: {
			Text: String,
		},
	};
</script>

<style>
	.sectionTitle {
		display: flex;
		flex-wrap: wrap;
	}
	.sectionTitle1 {
		width: 100%;
		font-weight: 900;
	}
	.title {
		font-size: 70px;
	}
	.line {
		border: 1px solid #31ddb2;
		width: 100%;
		height: 1px;
		align-self: center;
	}
	@media (max-width: 1080px) {
		.sectionTitle {
			flex-direction: column;
			justify-content: center;
		}
		.title {
			text-align: center;
			margin: 0 auto;
		}
		.sectionTitle1 {
			width: 100%;
		}
		.line {
			width: 70%;
			border: 2px solid #31ddb2;
		}
	}
	@media (min-width: 0px) and (max-width: 360px) {
		.title {
			font-size: 50px;
		}
	}
	@media (min-width: 361px) and (max-width: 600px) {
		.title {
			font-size: 50px;
		}
	}
</style>
