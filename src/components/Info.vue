<template>
	<div class="info">
		<!-- <img src="./assets/images/fotoJorge.jpg" id="fotoJorge" alt=""> -->
		<p class="principalTitle">Hola<br /></p>
		<h1 class="ml1 textGreenA principalTitle">
			<span class="text-wrapper">
				<span class="line line1"></span>
				<span class="letters">Soy Jorge Hidalgo</span>
				<span class="line line2"></span>
			</span>
		</h1>
		<p class="principalTitle"><span class="textGray">Desarrollador junior full stack</span></p>
	</div>
</template>

<script>
	export default {
		name: "Info",
		mounted() {
			anime
				.timeline({ loop: false })
				.add({
					targets: ".ml1 .letters",
					scale: [0.3, 1],
					opacity: [0, 1],
					translateZ: 0,
					easing: "easeOutExpo",
					duration: 1000,
					delay: (el, i) => 200 * (i + 1),
				})
				.add({
					targets: ".ml1 .line",
					scaleX: [0, 1],
					opacity: [0.5, 1],
					easing: "easeOutExpo",
					duration: 1000,
					offset: "-=875",
					delay: (el, i, l) => 350 * (l - i),
				});
		},
	};
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Montserrat:900|Work+Sans:300" rel="stylesheet');

	.textGray {
		color: #8892b0;
	}
	.info {
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-content: center;
		/* background-image: url("./assets/images/background.jpg"); */
		background-size: 100vw 100vh;
		background-position: center;
		font-family: "Montserrat", sans-serif;
	}

	.ml1 {
		text-align: center;
	}
	.principalTitle {
		font-weight: 900;
		font-size: 85px;
	}

	.principalTitle,
	.ml1.letters {
		line-height: 100px;
	}

	.ml1 .letters {
		display: inline-block;
	}

	.ml1 .text-wrapper {
		position: relative;
		display: inline-block;
		padding-top: 0.1em;
		padding-right: 0.05em;
		padding-bottom: 0.15em;
	}

	.ml1 .line {
		opacity: 0;
		position: absolute;
		left: 0;
		height: 5px;
		width: 100%;
		background-color: #fff;
		border-color: #fff;
		transform-origin: 0 0;
	}

	.ml1 .line1 {
		top: 0;
	}
	.ml1 .line2 {
		bottom: 0;
	}
	@media (min-width: 0px) and (max-width: 360px) {
		.principalTitle,
		.ml1.letters {
			line-height: 1;
		}
		.principalTitle {
			font-size: 25px;
		}
		.ml1 .letters {
			padding: 15px 0 10px 0;
		}
		.info {
			margin: 0 0 0 0;
			height: calc(100vh - 100px);
			height: 100vh;
			width: 100%;
		}

	}
	@media (min-width: 361px) and (max-width: 600px) {
		.principalTitle {
			font-size: 38px;
			line-height: 1;
		}
		.ml1 .letters {
			padding: 15px 0 10px 0;
		}
		.info {
			margin: 0 0 0 0;
			height: calc(100vh - 100px);
		}
		.principalTitle,
		.ml1.letters {
			line-height: 60px;
		}
	}
	@media (min-width: 601px) and (max-width: 1000px) {
		.principalTitle {
			font-size: 68px;
		}
		.ml1 .letters {
			padding: 15px 0 10px 0;
		}
		.info {
			margin: 0 0 0 0;
			height: calc(100vh - 100px);
		}
	}
</style>
