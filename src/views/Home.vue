<template>
	<div>
		<section data-aos="fade" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
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
			id="proyects"
		>
			<Proyects />
		</section>
		<section
			class="division"
			data-aos="fade"
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
	import About from "../components/About.vue";
	import Experience from "../components/Experience.vue";
	import Proyects from "../components/Proyects.vue";
	import Contact from "../components/Contact.vue";
	import $ from "jquery";

	export default {
		name: "Home",
		components: {
			Info,
			About,
			Experience,
			Proyects,
			Contact,
		},
		mounted() {
			var sections = $("section"),
				nav = $("nav"),
				nav_height = nav.outerHeight();
			$(window).on("scroll", function() {
				var cur_pos = $(this).scrollTop();

				sections.each(function() {
					var top = $(this).offset().top - nav_height,
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
		padding-top: 100px;
		height: fit-content;
		width: 100%;
	}
	@media (min-width: 0px) and (max-width: 600px) {
		.division {
			padding-top: 100px;
		}
	}
</style>
