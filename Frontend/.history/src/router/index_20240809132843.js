import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import client from "../layout/client.vue";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        component: client,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "login",
                name: "login",
                component: Login,
            },
            {
                path: "signup",
                name: "signup",
                component: SignUp,
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
