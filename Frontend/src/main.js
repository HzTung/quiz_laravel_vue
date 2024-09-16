import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import "./style.css";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import "animate.css";
import WOW from "wowjs";

createApp(App).use(router).use(store).mount("#app");
