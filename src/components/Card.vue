<template>
	<div class="card" :class="title">
		<div class="box">
			<div class="imgCard">
				<img :src="require(`@/assets/images/${image}.png`)" alt="html logo" />
			</div>
			<!-- <div class="hoverMe" :class="hover">
				<span>Hover me!</span>
			</div> -->
			<div class="percent">
				<svg class="mysvg">
					<circle cx="70" cy="70" r="70"></circle>
					<circle cx="70" cy="70" r="70" class="circle" :class="circle" :style="animationStyle"></circle>
				</svg>
				<div class="number">
					<h2><span class="num" :class="num" :style="percentStyle"></span><span>%</span></h2>
				</div>
			</div>
			<h2 class="text">{{ title }}</h2>
			<div class="cardP">
				<p>{{ description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Card",
		props: {
			percent: { type: Number, default: 10 },
			title: { type: String, default: "Empty" },
			image: { type: String, default: "" },
			description: { type: String, default: "" },
		},
		data() {
			return {
				circle: `${this.title}-circle`,
				num: `${this.title}-num`,
				hover: `${this.title}-hover`,
			};
		},
		computed: {
			percentStyle() {
				return { "--percent": this.percent };
			},
			animationStyle() {
				return { "--percentCalc": ` ${440 - (440 * this.percent) / 100}px` };
			},
		},
		mounted() {
			let numAnimation = false;
			let cardAnimation = false;
			const circle = document.querySelector(`.${this.circle}`);
			const span = document.querySelector(`.${this.num}`);
			const hover = document.querySelector(`.${this.hover}`);
			const observerCircle = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !cardAnimation) {
						circle.classList.add("card-animation");
						cardAnimation = true;
						return;
					}
					//circle.classList.remove("card-animation");
				});
			});
			observerCircle.observe(document.querySelector(`.${this.title}`));

			const observerNum = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !numAnimation) {
						span.classList.add("num-animation");
						numAnimation = true;
						return;
					}
					//span.classList.remove("num-animation");
				});
			});
			observerNum.observe(document.querySelector(`.${this.title}`));

			/* const observerHover = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						hover.classList.add("hover-show");
						return;
					}
					hover.classList.remove("hover-animation");
				});
			});
			observerHover.observe(document.querySelector(`.${this.title}`)); */
		},
	};
</script>

<style scoped>
	.card {
		position: relative;
		margin: 35px 30px;
		width: 250px;
		background: linear-gradient(329deg, #073768, #053d75);
		background-size: 400% 400%;
		border: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 300px;
		border-radius: 24px;
		text-align: center;
		transition: 0.5s;
		box-shadow: inset 10px 14px 55px 15px #002142;
		backdrop-filter: blur(10px);
	}
	@-webkit-keyframes background-card {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@-moz-keyframes background-card {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@-o-keyframes background-card {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@keyframes background-card {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	.test {
		background-color: #31ddb2;
	}
	.card:hover {
		transform: translateY(-20px);
		box-shadow: inset 10px 14px 55px 15px #002142;
		background: linear-gradient(329deg, #002142, #053d75);
		background-size: 400% 400%;
	}
	.card:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}
	.hoverMe {
		position: absolute;
		left: -30px;
		top: 0;
		background-color: #31ddb2;
		padding: 5px;
		border-radius: 25px;
		transition: 0.5s;
		transform: rotate(-10deg);
	}
	.hover-animation {
		animation: hide 2s forwards;
	}
	@keyframes hide {
		0% {
			/* opacity: 1; */
			transform: translateY(0px) rotate(-10deg);
		}
		25% {
			/* opacity: 0; */
			transform: translateY(-20px) rotate(-10deg);
		}
		50% {
			transform: translateY(0px) rotate(-10deg);
		}
		75% {
			/* opacity: 0; */
			transform: translateY(-20px) rotate(-10deg);
		}
		100% {
			opacity: 0;
		}
	}
	.hoverMe span {
		font-size: 19px;
		font-weight: 700;
	}
	.card:hover .hoverMe {
		transform: translateY(-30px);
		opacity: 0;
	}
	.cardP {
		position: absolute;
		left: 0;
		right: 0;
		top: 80%;
		opacity: 0;
		transition: 0.2s ease-in-out;
		background-color: #31ddb2;
		border-radius: 0 0 30px 30px;
		box-shadow: inset 1px 1px 55px 15px #002142;
		height: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cardP p {
		font-size: 16px;
		font-weight: 100 !important;
		margin: 0;
	}
	.cardP p,
	.hoverMe span {
		font-family: monaco, Consolas, Lucida Console, monospace;
		color: #fff;
	}
	.imgCard {
		position: absolute;
		opacity: 0;
		transition: 0.5s;
		transform: translate(150px, -40px);
	}
	.card:hover .imgCard {
		transform: translate(150px, -80px);
		opacity: 1;
	}
	.card:hover .cardP {
		top: 85%;
		opacity: 1;
	}
	.imgCard img {
		width: 75px;
		height: 75px;
		filter: drop-shadow(0 12px 2px rgba(0, 0, 0, 0.7));
	}
	.percent {
		position: relative;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		box-shadow: inset 0 0 50px #000;
		background: #222;
		transition: 0.5s;
		z-index: 1;
	}
	.percent .number {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
	}
	.percent .number h2 .num {
		color: #777;
		font-weight: 700;
		font-size: 40px;
		transition: 0.5s;
	}
	.card:hover .percent .number h2 .num {
		color: #fff;
		font-size: 60px;
	}
	.percent .number h2 span {
		font-size: 24px;
		color: #777;
	}
	.card:hover .percent .number h2 span {
		color: #fff;
	}
	.text {
		position: relative;
		color: #777;
		margin-top: 15px;
		font-weight: 900;
		font-size: 25px;
		transition: 0.5s;
	}
	.card:hover .text {
		color: #fff;
	}
	svg {
		position: relative;
		width: 150px;
		height: 155px;
		z-index: 1000;
	}
	svg circle {
		width: 100%;
		height: 100%;
		fill: none;
		stroke: #191919;
		stroke-width: 10;
		stroke-linecap: round;
		transform: translate(5px, 5px);
	}
	svg circle:nth-child(2) {
		stroke-dasharray: 440px;
		stroke-dashoffset: 440px;
	}
	.card-animation {
		animation: percent 6s forwards;
	}
	.num-animation {
		animation: counter 6s forwards alternate ease-in-out;
	}
	.card svg circle:nth-child(2) {
		/* animation: percent 6s forwards; */
		stroke: #31ddb2;
		-webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
		filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
	}
	@keyframes percent {
		0% {
			stroke-dashoffset: 440px;
		}
		100% {
			/* 440 - ((440 * %)/100) */
			stroke-dashoffset: var(--percentCalc);
		}
	}
	@property --num {
		syntax: "<integer>";
		initial-value: 0;
		inherits: false;
	}
	.num {
		counter-reset: num var(--num);
		font: 800 40px system-ui;
	}

	.num::after {
		content: counter(num);
	}

	@keyframes counter {
		from {
			--num: 0;
		}
		to {
			--num: var(--percent);
		}
	}
	@media (min-width: 0px) and (max-width: 480px) {
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 20px;
		}
		.cont .card {
			width: 190px;
			height: 225px;
			margin: 55px 15px;
		}
		.title {
			text-align: center;
			margin-left: 0px;
			font-size: 50px;
		}
		.imgCard {
			transform: translate(108px, -40px);
		}
		.card:hover .imgCard {
			transform: translate(108px, -60px);
			opacity: 1;
		}
		.card:hover .cardP {
		top: 95%;
		opacity: 1;
	}
	}
	@media (min-width: 481px) and (max-width: 600px) {
		.cont .card {
			width: 200px;
			height: 250px;
			margin: 15px 15px;
		}
	}
	@media (min-width: 601px) and (max-width: 731px) {
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 0;
		}
		.title {
			text-align: center;
			margin-left: 0px;
		}
		.card {
			width: 170px;
			height: 250px;
			margin: 50px 40px;
		}
		.imgCard {
			transform: translate(110px, -40px);
		}
		.card:hover .imgCard {
			transform: translate(110px, -70px);
			opacity: 1;
		}
		.cardP {
			padding: 5px;
		}
		.cardP p {
			font-size: 14px;
			font-weight: 400 !important;
			margin: 0;
		}
		.card:hover .cardP {
			top: 90%;
			opacity: 1;
		}
	}
	@media (min-width: 361px) and (max-width: 731px) {
		.percent {
			width: 123px;
			height: 123px;
		}
		svg {
			position: relative;
			width: 123px;
			height: 123px;
			z-index: 1000;
		}
		svg circle {
			width: 100%;
			height: 100%;
			fill: none;
			stroke: #191919;
			stroke-width: 10;
			stroke-linecap: round;
			transform: translate(5px, 5px) scale(0.8);
		}
	}
	@media (min-width: 732px) and (max-width: 742px) {
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 0;
		}
		.title {
			text-align: center;
			margin-left: 0px;
		}
		.card {
			width: 200px;
			height: 250px;
			margin: 45px 28px;
		}
		.imgCard {
			transform: translate(130px, -40px);
		}
		.card:hover .imgCard {
			transform: translate(130px, -70px);
			opacity: 1;
		}
		.cardP p {
			font-size: 16px;
			font-weight: 100 !important;
			margin: 0;
		}
		.card:hover .cardP {
			top: 90%;
			opacity: 1;
		}
	}
	@media (min-width: 743px) and (max-width: 900px) {
		.cont .card {
			width: 200px;
			height: 250px;
		}
		.cardP {
			border-radius: 0 0 30px 30px;
			box-shadow: inset 1px 1px 55px 15px #002142;
			height: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.cardP p {
			font-size: 16px;
			font-weight: 100 !important;
			margin: 0;
		}
		.card:hover .cardP {
			top: 90%;
			opacity: 1;
		}
	}
	@media (min-width: 901px) and (max-width: 1390px) {
		.knowledgesContainer h3 {
			font-size: 40px;
			margin: 0 0 20px 0;
		}
		.title {
			text-align: center;
			margin-left: 0px;
		}
	}
</style>
