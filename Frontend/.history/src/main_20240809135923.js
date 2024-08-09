import { createApp } from "vue";
import "flowbite/dist/flowbite.css";
import "tailwindcss/tailwind.css";
import "./style.css";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
