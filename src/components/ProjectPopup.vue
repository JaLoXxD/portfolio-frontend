<template>
	<div class="popupContainer">
		<div class="popup"></div>
	</div>
</template>

<script>
	export default {
		name: "ProjectPopup",
	};
</script>

<style lang="css" scoped>
	.popupContainer {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.4);
	}
	.popup {
		min-width: 60%;
		min-height: 500px;
	}
</style>
