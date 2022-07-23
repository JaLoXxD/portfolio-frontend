const projects = [
	{
		id: "project0",
		title: "Hairdressing App",
		description:
			"Página web SPA que permite crear clientes y citas para una peluquería. Las citas pueden modificarse para indicar que ya han sido atendidas",
		image: require("@/assets/images/projects/hairdressing.png"),
		gitHubUrl: "https://github.com/JaLoXxD/Hairdressing-BackEnd",
		projectUrl: "https://hairdressing-jh.netlify.app/",
		technologies: ["Vue3", "NodeJs", "MongoDB"],
	},
	{
		id: "project1",
		title: "Dashboard View",
		description:
			"Pagina web con un ejemplo de un dashboard. Unicamente es diseño, no tiene ninguna función implementada de momento pero consume la API usada en Hairdressing App para mostrar información en una tabla.",
		image: require("@/assets/images/projects/dashboard-design.png"),
		gitHubUrl: "https://github.com/JaLoXxD/react-dashboard",
		projectUrl: "https://jaloxxd.github.io/react-dashboard/",
		technologies: ["React"],
	},
	{
		id: "project2",
		title: "Pico & Placa",
		description: "Pagina web que permite añadir vehículos y comprobar con su placa si pueden circular o no (basado en el pico y placa de Ecuador).",
		image: require("@/assets/images/projects/pico-placa.png"),
		gitHubUrl: "https://github.com/JaLoXxD/pico-placa-frontend",
		projectUrl: "https://jaloxxd.github.io/pico-placa-frontend/",
		technologies: ["React", "NodeJs"],
	},
];

export { projects };
