<template>
	<Spinner :isLoading="isLoading" />
	<ProjectPopup :class="getProjectPopup.isVisible && 'showPopup'" />
	<div id="nav">
		<Navbar />
	</div>
	<div class="principalContainer">
		<router-view />
		<Footer />
	</div>
	<ContactInfo />
</template>

<script>
	import Navbar from "./components/Navbar.vue";
	import Footer from "./components/Footer.vue";
	import ContactInfo from "./components/ContactInfo.vue";
	import Spinner from "./components/Spinner.vue";
	import ProjectPopup from "./components/ProjectPopup.vue";
	import { mapGetters } from "vuex";

	export default {
		name: "App",
		components: {
			Navbar,
			Footer,
			ContactInfo,
			Spinner,
			ProjectPopup,
		},
		data() {
			return {
				isLoading: true,
			};
		},
		watch: {
			getProjectPopup({ isVisible }) {
				if (isVisible) {
					document.documentElement.style.overflow = "hidden";
					return;
				}
				document.documentElement.style.overflow = "auto";
			},
		},
		mounted() {
			setTimeout(() => {
				this.isLoading = false;
			}, 3000);
			console.log(this.getProjectPopup.isVisible);
		},
		computed: {
			...mapGetters(["getProjectPopup"]),
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		max-width: 100%;
	}
	#app {
		position: relative;
	}
	body {
		background-color: #002142;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		font-family: "Varela Round", sans-serif;
	}

	li,
	a,
	h3,
	h1,
	h2,
	p,
	button {
		font-weight: 500;
		font-size: 30px;
		color: #edf0f1;
		text-decoration: none;
	}
	.principalContainer {
		width: 70%;
		height: auto;
		margin: 0 15%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.textGreenA {
		color: #12b98f;
	}
	.textGray {
		color: #8892b0;
	}

	p {
		font-size: 45px;
		text-align: center;
	}
	@media (min-width: 0px) and (max-width: 700px) {
		.principalContainer {
			width: 90%;
			margin: 0 auto;
		}
	}
</style>
