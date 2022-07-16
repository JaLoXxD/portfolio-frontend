const projects = [
	{
		title: "Hairdressing App",
		description:
			"Página web SPA que permite crear clientes y citas para una peluquería. Las citas pueden modificarse para indicar que ya han sido atendidas",
		image: require("@/assets/images/projects/hairdressing.png"),
		gitHubUrl: "",
		projectUrl: "https://hairdressing-jh.netlify.app/",
		technologies: ["Vue3", "NodeJs", "MongoDB"],
	},
	{
		title: "Dashboard View",
		description:
			"Pagina web con un ejemplo de un dashboard. Unicamente es diseño, no tiene ninguna función implementada de momento pero consume la API usada en Hairdressing App para mostrar información en una tabla.",
		image: require("@/assets/images/projects/dashboard-design.png"),
		gitHubUrl: "https://github.com/JaLoXxD/react-dashboard",
		projectUrl: "https://jaloxxd.github.io/react-dashboard/",
		technologies: ["React"],
	},
];

export { projects };
