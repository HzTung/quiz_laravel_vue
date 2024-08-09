import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import "./style.css";
import router from "./router";
import App from "./App.vue";
// import "flowbite/dist/flowbite.css";

createApp(App).use(router).mount("#app");
