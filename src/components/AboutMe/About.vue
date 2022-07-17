<template>
	<Title Text="Sobre mi" />
	<div id="Knowledges">
		<div>
			<Description />
		</div>
		<div>
			<FrontEndHabilities />
		</div>
		<div>
			<BackEndHabilities />
		</div>
		<div>
			<OtherHabilities />
		</div>
	</div>
</template>

<script>
	import Title from "../Title.vue";
	import Description from "./Description.vue";
	import FrontEndHabilities from "./FrontEndHabilities.vue";
	import BackEndHabilities from "./BackEndHabilities.vue";
	import OtherHabilities from "./OtherHabilities.vue";

	export default {
		name: "About",
		components: {
			Title,
			Description,
			FrontEndHabilities,
			BackEndHabilities,
			OtherHabilities,
		},
	};
</script>

<style scoped>
	#Knowledges {
		height: fit-content;
		margin: 0;
	}
	div {
		margin: 100px 0 100px 0;
	}
	@media (min-width: 0px) and (max-width: 600px) {
		div {
			margin: 0px 0 40px 0;
		}
	}
</style>
