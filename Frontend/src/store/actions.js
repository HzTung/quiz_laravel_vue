import axiosClient from "../axios";
import axios from "axios";

export function login({ commit }, data) {
    return axiosClient.post("login", data).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
    });
}

export function signup({ commit }, data) {
    return axiosClient.post("signup", data).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
    });
}

export function logout({ commit }) {
    return axiosClient.post("logout").then(({ data }) => {
        commit("setUser", null);
        commit("setToken", null);
        return data;
    });
}

export function getSubject({ commit }) {
    return axios.get("/db/Subjects.json").then(({ data }) => {
        commit("setSubject", data);
        return data;
    });
}
