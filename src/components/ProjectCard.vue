<template>
	<div class="projectCard">
		<img :src="project.image" alt="" />
		<div class="cardContent">
			<h3>{{ project.title }}</h3>
			<!-- <p>{{ project.description }}</p>
            <p v-for="(technologie, i) in project.technologies" :key="i">{{technologie}}</p> -->
		</div>
	</div>
</template>

<script>
	export default {
		name: "ProjectCard",
		props: {
			project: Object,
		},
	};
</script>

<style lang="css" scoped>
	.projectCard {
        cursor: pointer;
		border-radius: 25px;
		display: flex;
		flex-direction: column;
		width: 300px;
		background-color: #fff;
		overflow: hidden;
		transition: all 0.5s ease-in-out;
		-webkit-transition: all 0.5s ease-in-out;
		-moz-transition: all 0.5s ease-in-out;
		-o-transition: all 0.5s ease-in-out;
	}
	.projectCard:hover {
		transform: translateY(-5px);
		-webkit-transform: translateY(-5px);
		-moz-transform: translateY(-5px);
		-o-transform: translateY(-5px);
	}
	.projectCard img {
		max-width: 100%;
		height: 160px;
		object-fit: cover;
	}
	.projectCard .cardContent {
		padding: 20px 15px;
	}
	.projectCard h3 {
		font-size: 24px;
		width: fit-content;
		margin: 0 auto;
		color: rgb(18 185 143);
		position: relative;
		transition: all 0.4s ease-in-out;
		-webkit-transition: all 0.4s ease-in-out;
		-moz-transition: all 0.4s ease-in-out;
		-o-transition: all 0.4s ease-in-out;
	}
	.projectCard p {
		font-size: 18px;
		color: #363636;
		margin-bottom: 0;
	}
	.projectCard h3::after {
		content: "";
		width: 0;
		border-bottom: 2px solid rgb(18 185 143);
		position: absolute;
		margin: auto;
		bottom: -2px;
		left: 0;
		right: 0;
		transition: all 0.4s ease-in-out;
		-webkit-transition: all 0.4s ease-in-out;
		-moz-transition: all 0.4s ease-in-out;
		-o-transition: all 0.4s ease-in-out;
	}
	.projectCard:hover .cardContent h3::after {
		width: 100%;
	}
</style>
