import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VAnimateCss from "v-animate-css";
app.AOS = new AOS.init();
createApp(App)
	.use(store)
	.use(router)
	.use(VueSweetalert2)
	.use(VAnimateCss)
	.mount("#app");
