<template>
	<div class="left">
		<ul class="">
			<li
				><a href="https://github.com/JaLoXxD" target="_blank"><i class="fab fa-github fa-sm"></i></a
			></li>
			<li
				><a href="https://api.whatsapp.com/send?phone=593989342712&text=Hola" target="_blank"><i class="fab fa-whatsapp fa-sm"></i></a
			></li>
			<li
				><a href="https://www.facebook.com/jorge.hidalgo.69/ " target="_blank"><i class="fab fa-facebook fa-sm"></i></a
			></li>
		</ul>
		<div class="verticalLine leftLine"> </div>
	</div>
	<div class="right">
		<a href="mailto:jororlando512@gmail.com" id="mail">jororlando512@gmail.com</a>
		<div class="verticalLine rightLine"> </div>
	</div>
</template>

<script>
	export default {
		name: "ContactInfo",
	};
</script>

<style scoped>
	.left {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		left: 0;
		bottom: 0;
		width: 5vw;
	}
	.left ul {
		list-style-type: "";
	}
	.left li {
		color: #edf0f1;
	}
	.right {
		float: right;
		position: fixed;
		display: flex;
		flex-direction: column;
		right: 0;
		bottom: 0;
		flex-wrap: wrap;
		width: 5vw;
	}
	#mail {
		font-size: 20px;
		writing-mode: vertical-lr;
		margin-bottom: 20px;
	}
	.left li a {
		transition: all 0.5s ease 0s;
	}

	.left li a:hover {
		color: #12b98f;
	}

	.right a {
		transition: all 0.5s ease 0s;
	}
	.right a:hover {
		color: #12b98f;
	}
	.verticalLine {
		border: 1px solid #12b98f;
		width: 0;
		height: 150px;
	}
	.leftLine {
		margin-left: 28px;
	}
	.rightLine {
		margin-left: 10px;
	}
	@media (min-width: 0px) and (max-width: 800px) {
		.left {
			display: none;
		}
		.right {
			display: none;
		}
	}
</style>
