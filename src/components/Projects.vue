<template>
	<Title Text="Proyectos" />
	<div id="projectsCont">
		<ProjectCard v-for="(project, i) in myProjects" :key="i" :project="project" />
	</div>
</template>

<script>
	import Title from "./Title.vue";
	import ProjectCard from "./ProjectCard.vue";

	import { projects } from "../helpers/projects.js";

	export default {
		name: "Projects",
		components: {
			Title,
			ProjectCard,
		},
		data() {
			return {
				myProjects: projects,
			};
		},
	};
</script>

<style scoped>
	#projectsCont {
		margin: 200px 0 0;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 50px;
	}
	#projectsCont h3 {
		font-size: 40px;
		margin: 0 0 15px;
	}
</style>
