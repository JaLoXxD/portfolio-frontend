<template>
	<div id="loaderCont" :class="toogleSpinner">
		<img src="../assets/images/spinner.svg" alt="" />
	</div>
</template>

<script>
	export default {
		name: "Spinner",
		props: {
			isLoading: Boolean,
		},
		computed: {
			toogleSpinner() {
                console.log(this.isLoading)
				return !this.isLoading && "loaded";
			},
		},
	};
</script>

<style lang="css" scoped>
	#loaderCont {
		position: absolute;
		z-index: 9999;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #002142;
        transition: all .5s ease-in-out;
	}
	.loaded {
        opacity: 0 !important;
        pointer-events: none !important;
        z-index: 0 !important;
    }
</style>
