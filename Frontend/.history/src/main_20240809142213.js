import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import { VueperSlides, VueperSlide } from "vueperslides";

import "vueperslides/dist/vueperslides.css";

createApp(App).use(router).mount("#app");
