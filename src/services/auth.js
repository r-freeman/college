import tokenService from "./token";
import {api, setAuthHeader, removeHeaders} from "../api";

export default {
    token() {
        return tokenService.getToken();
    },
    login(credentials) {
        return new Promise((resolve, reject) => {
            api.post('login', credentials)
                .then(response => {
                    if (response.status === 200) {
                        setAuthHeader(response.data.token);
                        tokenService.setToken(response.data.token);
                        resolve(response.data);
                    }
                }).catch(e => {
                reject(e);
            })
        })
    }
}