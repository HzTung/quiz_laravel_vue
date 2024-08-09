import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import "vueperslides/dist/vueperslides.css";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import { VueperSlides, VueperSlide } from "vueperslides";

createApp(App).use(router).mount("#app");
