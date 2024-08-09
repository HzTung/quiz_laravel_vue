import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import "../node_modules/flowbite-vue/dist/index.css";
import "./style.css";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
