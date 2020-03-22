import * as types from "../mutation-types";

export default {
    namespaced: true,
    state: {
        name: "",
        email: "",
        password: "",
        confirm: ""
    },
    getters: {
        name: state => {
            return state.name;
        },
        email: state => {
            return state.email;
        },
        password: state => {
            return state.password;
        },
        confirm: state => {
            return state.confirm;
        }
    },
    mutations: {
        [types.SET_NAME](state, payload) {
            state.name = payload;
        },
        [types.SET_EMAIL](state, payload) {
            state.email = payload;
        },
        [types.SET_PASSWORD](state, payload) {
            state.password = payload;
        },
        [types.SET_CONFIRM](state, payload) {
            state.confirm = payload;
        },
        [types.RESET_LOGIN](state) {
            state.email = state.password = ""
        },
        [types.RESET_REGISTER](state) {
            state.name = state.email = state.password = state.confirm = "";
        }
    },
    actions: {
        login() {

        },
        register() {

        }
    }
}
