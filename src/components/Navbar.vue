<template>
	<div class="navbarDiv" id="navbar">
		<nav class="navbar fixed-top navbar-expand-lg">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img src="../assets/images/logo.png" alt="" class="navImg" />
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span><i class="fas fa-bars"></i></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
						<li class="" id="aboutNav">
							<router-link :to="{ name: '', hash: '#about' }">Sobre mi</router-link>
						</li>
						<li class="" id="experienceNav">
							<router-link to="#experience">Experiencia</router-link>
						</li>
						<li id="projectsNav">
							<router-link to="#proyects">Proyectos</router-link>
						</li>
						<li class="" id="contactNav">
							<router-link class="" to="#contact">Contacto</router-link>
						</li>
					</ul>
					<div class="button">
						<a href="https://portfolio-jh512.herokuapp.com/pdf"><button class="buttonContact">Descargar CV</button></a>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
		methods: {},
		mounted() {},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");
	.container {
		padding: 0;
		margin: 0 auto;
		width: 100%;
	}
	#navbar {
		position: fixed;
		top: 0;
		width: 100%;
		display: block;
		transition: top 0.7s;
		z-index: 9000;
	}
	#navbarSupportedContent {
		background-color: #229679;
		border-radius: 0 0 20px 20px;
		text-align: center;
		widows: 100%;
	}
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #229679;
		padding: 10px 80px;
		height: fit-content;
		position: relative;
	}
	.navbar-brand {
		width: fit-content !important;
	}
	.active,
	.navbar-nav li:hover {
		background-color: #144a70;
		border-radius: 25px;
	}
	.navbar-nav li:hover a {
		color: #fff;
	}
	.navImg {
		width: 80px;
		height: 80px;
	}

	.navbar-nav {
		list-style: none;
		width: 75%;
		display: block;
		margin: 0 auto;
	}

	.navbar-nav li {
		display: inline-block;
		padding: 0px 20px;
		transition: all 1s ease 0s;
		border-radius: 25px;
		margin: 0 10px;
	}

	.navbar-nav li a {
		transition: all 0.3s ease 0s;
		font-weight: 700;
	}
	button,
	.navbar-nav li a {
		font-family: "Quicksand", sans-serif;
		font-weight: 900;
		font-size: 35px;
	}

	.navbar-toggler {
		color: #edf0f1;
		background-color: #229679;
	}
	.buttonContact {
		padding: 9px 25px;
		background-color: #0c293e;
		border: none;
		border-radius: 50px;
		cursor: pointer;
		transition: all 0.3s ease 0s;
	}

	.buttonContact:hover {
		background-color: #144a70;
	}
	@media (min-width: 0px) and (max-width: 700px) {
		.navImg {
			width: 80px;
			height: 80px;
		}
		.navbar {
			height: auto;
		}
	}
	@media (min-width: 0px) and (max-width: 991px) {
		#navbarSupportedContent {
			width: 20px;
		}
		li,
		button {
			margin: 10px 0;
		}
	}
	@media (max-width: 1439px) {
		li a,
		button {
			font-size: 26px !important;
		}
	}
	@media (max-width: 1200px) {
		li a,
		button,
		#navbarSupportedContent {
			font-size: 25px !important;
		}
		.navbar {
			padding: 10px 50px;
		}
	}
	@media (max-width: 500px) {
		.navbar {
			padding: 10px 20px;
		}
		.navbar-nav {
			width: 100%;
		}
		#navbar {
			max-height: 80px !important;
		}
		.navImg {
			height: 60px;
			width: auto;
		}
	}
	@media (max-width: 350px) {
		li a,
		button {
			font-size: 20px !important;
		}
	}
</style>
