<template>
	<div class="descriptionContainer">
		<div class="leftContent">
			<img src="../assets/images/fotoJorge.jpg" alt="" />
		</div>
		<div class="rightContent">
			<p class="largeText">
				¡Hola! soy Jorge y me encanta crear cosas que esten en internet, mis intereses principales son el desarrollo web y móvil, mis inicios con la
				programación fueron en el 2017 en la universidad, al tener gusto por ello decidí centrarme en el desarrollo web principalmente aunque
				también me gusta el desarrollo móvil.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Description",
	};
</script>

<style scoped>
	.descriptionContainer {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 20px;
	}
	.leftContent {
		border-radius: 10%;
		width: 28%;
		overflow: hidden;
		display:flex;
		align-items: center;
	}
	.rightContent {
		width: 70%;
		display:flex;
		align-items:center;
	}
	.largeText {
		font-size: 24px;
		font-family: "Calibri";
		color: #a8b2d1;
		text-align: start;
	}
	img {
		border-radius: 10%;
		width: 100%;
		height: auto;
		margin-right: 60px;
		opacity: 1;
	}
	@media (max-width:1080px){
		.descriptionContainer{
			flex-wrap:wrap;
		}
		.leftContent,.rightContent{
			width: 100%;
		}
		.largeText{
			text-align:center;
		}
		img{
			max-width: 350px;
			margin: 0 auto;
		}
	}
</style>
