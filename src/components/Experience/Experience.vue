<template>
	<Title Text="Experiencia" />
	<div class="experience">
		<div class="experienceLeft">
			<button :class="activeButton1" @click="change(1)">NovaTravelGroup</button>
			<button :class="activeButton2" @click="change(2)">Habitacars</button>
			<button :class="activeButton3" @click="change(3)">AlphaCrew Studio</button>
			<button :class="activeButton4" @click="change(4)">UIO Soft +</button>
			<button :class="activeButton5" @click="change(5)">Conecta Seproteico</button>
		</div>
		<div class="experienceRight">
			<transition name="fade">
				<div v-if="job === 1 && open1" class="rightContent">
					<div class="duration">
						<p class="largeText underline"><span class="up">Desde:</span> Septiembre 2020</p>
						<p class="largeText underline"><span class="up">Hasta:</span> Febrero 2021</p>
					</div>
					<ul>
						<li><span class="largeText">Desarrollo de la página web de la empresa de 0.</span></li>
						<li><span class="largeText">Administración de redes, cámaras de seguridad.</span></li>
						<li><span class="largeText">Instalación de escaner biométrico.</span></li>
						<li><span class="largeText">Soporte técnico a computadoras e impresoras.</span></li>
					</ul>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="job === 2 && open2" class="rightContent">
					<div class="duration">
						<p class="largeText underline"><span class="up">Desde:</span> Febrero 2021</p>
						<p class="largeText underline"><span class="up">Hasta:</span> Junio 2021</p>
					</div>
					<ul>
						<li><span class="largeText">Desarrollo sistema administrativo.</span></li>
						<li><span class="largeText">Desarrollo de una API en python (Flask).</span></li>
						<li><span class="largeText">Desarrollo de FrontEnd en angular.</span></li>
						<li><span class="largeText">Soporte técnico a computadoras e impresoras.</span></li>
					</ul>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="job === 3 && open3" class="rightContent">
					<div class="duration">
						<p class="largeText underline"><span class="up">Desde: </span> Julio 2021</p>
						<p class="largeText underline"><span class="up">Hasta: </span> Julio 2022</p>
					</div>
					<ul>
						<li><span class="largeText">Desarrollo de front end (Html, CSS, Wordpress).</span></li>
						<li><span class="largeText">Desarrollo de backend (Firebase, NodeJS).</span></li>
						<li><span class="largeText">Optimización de carga de páginas web.</span></li>
						<li><span class="largeText">Deploy a servidores.</span></li>
					</ul>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="job === 4 && open4" class="rightContent">
					<div class="duration">
						<p class="largeText underline"><span class="up">Desde: </span> Agosto 2022</p>
						<p class="largeText underline"><span class="up">Hasta: </span> Septiembre 2022</p>
					</div>
					<span class="largeText">Proyecto freelance en el que se desarrolló una API usando nodeJs para una applicación bancaria para solicitar préstamos.</span>
					<ul class="mt-3">
						<li><span class="largeText">Creación del modelo de base de datos.</span></li>
						<li><span class="largeText">Uso de middlewares para validar información.</span></li>
						<li><span class="largeText">Testing con jest.</span></li>
						<li><span class="largeText">Single Responsibility pattern.</span></li>
					</ul>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="job === 5 && open5" class="rightContent">
					<div class="duration">
						<p class="largeText underline"><span class="up">Desde: </span> Agosto 2022</p>
						<p class="largeText underline"><span class="up">Hasta: </span> Actualidad</p>
					</div>
					<ul>
						<li><span class="largeText">Desarrollo de front end (Angular).</span></li>
						<li><span class="largeText">Migración de software bancario a nueva versión.</span></li>
						<li><span class="largeText">Creación de componentes reutilizables.</span></li>
						<li><span class="largeText">Buenas prácticas y CLEAN code.</span></li>
					</ul>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";
	import Title from "../Title.vue";
	export default {
		setup() {
			const open1 = ref(true);
			const open2 = ref(false);
			const open3 = ref(false);
			const open4 = ref(false);
			const open5 = ref(false);
			return {
				open1,
				open2,
				open3,
				open4,
				open5,
			};
		},
		name: "Experience",
		data() {
			return {
				job: 1,
				show: true,
			};
		},
		methods: {
			change(n) {
				this.job = n;
				this.open1 = false;
				this.open2 = false;
				this.open3 = false;
				this.open4 = false;
				this.open5 = false;
				switch (n) {
					case 1:
						this.open1 = true;
						break;
					case 2:
						this.open2 = true;
						break;
					case 3:
						this.open3 = true;
						break;
					case 4:
						this.open4 = true;
						break;
					case 5:
						this.open5 = true;
						break;
					default:
					this.open1 = true;
				}
			},
		},
		computed: {
			activeButton1() {
				return this.job === 1 ? "buttonExperience activeButton" : "buttonExperience";
			},
			activeButton2() {
				return this.job === 2 ? "buttonExperience activeButton" : "buttonExperience";
			},
			activeButton3() {
				return this.job === 3 ? "buttonExperience activeButton" : "buttonExperience";
			},
			activeButton4() {
				return this.job === 4 ? "buttonExperience activeButton" : "buttonExperience";
			},
			activeButton5() {
				return this.job === 5 ? "buttonExperience activeButton" : "buttonExperience";
			},
		},
		components: {
			Title,
		},
	};
</script>

<style scoped>
	.fade-enter-active {
		transition: opacity 5s ease;
	}
	.fade-leave-active {
		transition: opacity 0s ease;
	}

	.fade-enter-from,
	.fade-leave-from {
		opacity: 0;
	}
	.fade2-leave-active {
		transition: opacity 0s ease;
	}
	.fade2-enter-active {
		transition: opacity 5s ease;
	}

	.fade2-enter-from,
	.fade2-leave-from {
		opacity: 0;
	}
	.fade3-leave-active {
		transition: opacity 0s ease;
	}
	.fade3-enter-active {
		transition: opacity 5s ease;
	}

	.fade3-enter-from,
	.fade3-leave-from {
		opacity: 0;
	}
	.fade4-leave-active {
		transition: opacity 0s ease;
	}
	.fade4-enter-active {
		transition: opacity 5s ease;
	}

	.fade4-enter-from,
	.fade4-leave-from {
		opacity: 0;
	}
	.sectionTitle {
		display: flex;
		color: #12b98f;
	}
	.sectionTitle2 {
		width: 20%;
	}
	.title {
		font-size: 50px;
	}
	.line2 {
		border: 1px solid #31ddb2;
		width: 80%;
		height: 1px;
		align-self: center;
	}
	.experience {
		display: flex;
		margin: 0 auto;
		width: 50vw;
		margin-top: 200px;
	}
	.experienceLeft {
		border-left: 1px solid #12b98f;
		display: flex;
		flex-direction: column;
		width: 30%;
	}
	.experienceRight {
		margin: 10px 30px 0 30px;
		text-align: start;
		width: 70%;
	}
	.rightContent {
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
	.rightText {
		margin-left: 40px;
	}
	.buttonExperience {
		background-color: #002142;
		height: fit-content;
		padding: 9px 25px;
		border: none;
		cursor: pointer;
		font-weight: 500;
		font-size: 25px;
		transition: all 0.9s ease 0s;
	}
	.buttonExperience:hover {
		background-color: #083563;
		color: #12b98f;
	}
	.activeButton {
		background-color: #083563;
		color: #12b98f;
	}
	.largeText {
		font-size: 20px;
		text-align: start;
		color: #a8b2d1;
	}
	.duration {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.underline {
		border-bottom: 1px solid #12b98f;
	}
	ul {
		list-style-type: "-  ";
	}
	li {
		color: #31ddb2;
	}
	li span {
		color: #8690ad;
		text-align: start;
	}
	@media (min-width: 1391px) and (max-width: 1679px) {
		.experience {
			width: 50vw;
			margin-top: 200px;
			margin-bottom: 300px;
		}
		.up {
			width: 100%;
		}
		.experienceLeft {
			width: 35%;
		}
		.experienceRight {
			width: 65%;
			margin: 0;
			padding-left: 15px;
		}
		.largeText {
			font-size: 22px;
			font-stretch: condensed;
		}
		.buttonExperience {
			padding: 8px 0 8px 0;
			font-size: 25px;
		}
		.underline {
			width: 45%;
			font-size: 23px;
			display: flex;
			flex-direction: column;
		}
		li {
			line-height: 30px;
			font-size: 20px;
			padding-bottom: 10px;
		}
		ul {
			padding-left: 10px;
		}
	}
	@media (min-width: 1200px) and (max-width: 1390px) {
		.experience {
			width: 80%;
			margin-top: 200px;
			margin-bottom: 300px;
		}
		.experienceLeft {
			width: 35%;
		}
		.experienceRight {
			width: 65%;
			margin: 0;
			padding-left: 15px;
		}
		.largeText {
			font-size: 22px;
			font-stretch: condensed;
		}
		.buttonExperience {
			padding: 8px 0 8px 0;
			font-size: 25px;
		}
		.underline {
			width: 45%;
			font-size: 23px;
			display: flex;
			flex-direction: column;
		}
		li {
			line-height: 30px;
			font-size: 20px;
			padding-bottom: 10px;
		}
		ul {
			padding-left: 10px;
		}
	}
	@media (min-width: 1024px) and (max-width: 1366px) {
		.experience {
			width: 100%;
			margin-top: 150px;
			margin-bottom: 150px;
		}
		.experienceLeft {
			width: 30%;
		}
		.experienceRight {
			width: 70%;
			margin: 0;
			padding-left: 15px;
		}
		.largeText {
			font-size: 23px;
			font-stretch: condensed;
		}
		.buttonExperience {
			padding: 8px 0 8px 0;
			font-size: 23px;
		}
		.underline {
			width: 45%;
			font-size: 23px;
			display: flex;
			flex-direction: column;
		}
		li {
			line-height: 30px;
			font-size: 20px;
			padding-bottom: 10px;
		}
		ul {
			padding-left: 10px;
		}
	}
	@media (min-width: 601px) and (max-width: 1023px) {
		.experience {
			width: 100%;
			margin-top: 150px;
			margin-bottom: 150px;
		}
		.experienceLeft {
			width: 35%;
		}
		.experienceRight {
			width: 65%;
			margin: 0;
			padding-left: 15px;
		}
		.largeText {
			font-size: 20px;
			font-stretch: condensed;
		}
		.buttonExperience {
			padding: 8px 0 8px 0;
			font-size: 20px;
		}
		.underline {
			width: 45%;
			font-size: 20px;
			display: flex;
			flex-direction: column;
		}
		li {
			line-height: 30px;
			font-size: 20px;
			padding-bottom: 10px;
		}
		ul {
			padding-left: 10px;
		}
	}
	@media (min-width: 420px) and (max-width: 600px) {
		.experience {
			width: 95%;
			padding: 0;
		}
		.experienceLeft {
			width: 40%;
		}
		.experienceRight {
			width: 60%;
			margin: 0;
			padding-left: 10px;
		}
		.largeText {
			font-size: 15px;
			font-stretch: condensed;
		}
		.buttonExperience {
			padding: 8px 0 8px 0;
			font-size: 17px;
		}
		.underline {
			width: 45%;
			font-size: 14px;
			display: flex;
			flex-direction: column;
		}
		li {
			line-height: 15px;
			font-size: 20px;
			padding-bottom: 10px;
		}
		ul {
			padding-left: 10px;
		}
	}
	@media (min-width: 0px) and (max-width: 419px) {
		.experience {
			width: 90%;
			margin-top: 40px;
			margin-bottom: 40px;
			flex-direction: column;
		}
		.experienceLeft {
			width: 100%;
			border: 0;
			border-bottom: 1px solid #12b98f;
		}
		.experienceRight {
			width: 100%;
			margin-top: 20px !important;
			margin: 0;
		}
		.buttonExperience,
		.largeText {
			font-size: 15px;
		}
		.underline {
			width: 45%;
			font-size: 14px;
			display: flex;
			flex-direction: column;
		}
	}
	@media (max-width: 480px) {
		ul {
			line-height: 15px;
		}
		ul li {
			margin-bottom: 5px;
		}
	}
</style>
