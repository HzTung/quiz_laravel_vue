import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import client from "../layout/client.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: client,
        children: [
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
