<template>
	<div class="popupContainer" @click="closePopup">
		<div class="popup" ref="popup">
			<div class="imgCont">
				<img src="https://via.placeholder.com/450x350" alt="" />
			</div>
			<div class="infoCont">
				<h2>Lorem, ipsum dolor.</h2>
				<p
					>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aspernatur necessitatibus ut consequatur dicta aliquam perferendis
					inventore nemo suscipit ducimus, quia expedita quis culpa quas, ea, reiciendis aliquid architecto labore! Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Harum aspernatur necessitatibus ut consequatur dicta aliquam perferendis inventore nemo suscipit ducimus,
					quia expedita quis culpa quas, ea, reiciendis aliquid architecto labore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
					aspernatur necessitatibus ut consequatur dicta aliquam perferendis inventore nemo suscipit ducimus, quia expedita quis culpa quas, ea,
					reiciendis aliquid architecto labore!</p
				>
				<ul>
					<li
						><a><i class="fab fa-github fa-sm"></i></a
					></li>
					<li
						><a><i class="fas fa-link"></i></a
					></li>
				</ul>
				<div class="technologies">
					<div class="item">
						Vue3
					</div>
					<div class="item">
						Vue3
					</div>
					<div class="item">
						Vue3
					</div>
					<div class="item">
						Vue3
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		name: "ProjectPopup",
		props: {
			isVisible: Boolean,
		},
		methods: {
			closePopup({ target }) {
				const { popup } = this.$refs;
				if (!popup.contains(target)) {
					const newProject = {
						isVisible: false,
						projectId: null,
					};
					this.updateProject(newProject);
				}
			},
			...mapActions(["updateProject"]),
		},
	};
</script>

<style lang="css" scoped>
	.popupContainer {
		position: absolute;
		width: 100vw;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 9999;
		top: 0;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s ease-in-out;
		-webkit-transition: all 0.4s ease-in-out;
		-moz-transition: all 0.4s ease-in-out;
		-o-transition: all 0.4s ease-in-out;
	}
	.showPopup {
		opacity: 1;
		pointer-events: all;
	}
	.popup {
		position: sticky;
		top: calc(50% - 250px);
		width: 80%;
		height: 500px;
		background-color: #fff;
		border-radius: 20px;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
	}
	.popup .imgCont {
		width: 60%;
		height: 100%;
	}
	.popup .imgCont img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.popup .infoCont {
		width: 40%;
		padding: 20px;
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.popup .infoCont h2,
	.popup .infoCont p {
		text-align: start;
	}
	.popup .infoCont h2 {
		color: rgb(18 185 143);
		font-size: 40px;
	}
	.popup .infoCont p {
		font-size: 18px;
		color: #363636;
		overflow-y: auto;
	}
	/* width */
	.popup .infoCont p::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	.popup .infoCont p::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	/* Handle */
	.popup .infoCont p::-webkit-scrollbar-thumb {
		background: rgb(12 41 62);
		border-radius: 10px;
	}
	.popup .infoCont ul {
		list-style: none;
		padding: 0;
		display: flex;
		align-items: center;
		gap: 30px;
	}
	.popup .infoCont ul li {
		cursor: pointer;
		font-size: 30px;
		color: rgb(12 41 62);
		transition: all 0.4s ease-in-out;
		-webkit-transition: all 0.4s ease-in-out;
		-moz-transition: all 0.4s ease-in-out;
		-o-transition: all 0.4s ease-in-out;
	}
	.popup .infoCont ul li:last-child a {
		font-size: 26px;
	}
	.popup .infoCont ul li:hover {
		transform: translateY(-5px);
	}
	.popup .infoCont .technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: auto;
	}
	.popup .infoCont .technologies .item {
		cursor: pointer;
		background-color: rgb(18 185 143);
		padding: 5px 15px;
		border-radius: 20px;
		color: #fff;
		transition: all 0.4s ease-in-out;
		-webkit-transition: all 0.4s ease-in-out;
		-moz-transition: all 0.4s ease-in-out;
		-o-transition: all 0.4s ease-in-out;
	}
	.popup .infoCont .technologies .item:hover {
		background-color: rgb(7, 153, 117);
	}
</style>
