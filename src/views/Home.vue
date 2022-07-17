<template>
	<div>
		<section class="division" data-aos="fade" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
			<Info />
		</section>
		<section
			class="division"
			data-aos="fade"
			data-aos-delay="100"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			id="about"
		>
			<About />
		</section>

		<section
			class="division"
			data-aos="fade"
			data-aos-delay="100"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			id="experience"
		>
			<Experience />
		</section>
		<section
			class="division"
			data-aos="fade"
			data-aos-delay="100"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			id="projects"
		>
			<Projects />
		</section>
		<section
			class="division"
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			id="contact"
		>
			<Contact />
		</section>
	</div>
</template>

<script>
	import Info from "../components/Info.vue";
	import About from "../components/AboutMe/About.vue";
	import Experience from "../components/Experience/Experience.vue";
	import Projects from "../components/Projects.vue";
	import Contact from "../components/Contact.vue";
	import $ from "jquery";

	export default {
		name: "Home",
		components: {
			Info,
			About,
			Experience,
			Projects,
			Contact,
		},
		mounted() {
			const sections = $("section"),
				nav = $("nav"),
				nav_height = nav.outerHeight();
			$(window).on("scroll", function() {
				const cur_pos = $(this).scrollTop();

				sections.each(function() {
					const top = $(this).offset().top - nav_height,
						bottom = top + $(this).outerHeight();

					if (cur_pos >= top && cur_pos <= bottom) {
						nav.find("li").removeClass("active");
						sections.removeClass("active");
						$(this).addClass("active");
						$(`#${$(this).attr("id")}Nav`).addClass("active");
					}
				});
			});
		},
	};
</script>

<style>
	.division {
		margin: 0;
		height: fit-content;
		min-height: calc(100vh - 110px);
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	@media (min-width: 0px) and (max-width: 600px) {
		.division {
			padding-top: 100px;
		}
	}
</style>
