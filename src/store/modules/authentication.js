import router from '../../router/index.js';
import firebase from "firebase";
import Userauth from "../../auth/index.js";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { status: { loggedIn: true }, user } : { status: {}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    getters: {

    },
    actions: {
        firebaseLogin({ dispatch, commit }, data) {
            commit('loginRequest', data.username);
            firebase
                .auth()
                .signInWithEmailAndPassword(data.username, data.password)
                .then(
                    result => {
                        commit('loginSuccess', user);
                        Userauth.localLogin(result);
                        if (result.user.refreshToken) {
                            localStorage.setItem('user', JSON.stringify(result.user.refreshToken));
                        }
                        router.push("/");
                    },
                    err => {

                        dispatch('alert/error', err, { root: true });

                    }
                );
        },
        firebaseRegister({ dispatch, commit }, data) {
            commit('registerRequest', data.username);
            firebase
                .auth()
                .createUserWithEmailAndPassword(data.username, data.password)
                .then(
                    result => {
                        commit('loginSuccess', user);
                        Userauth.localLogin(result);
                        if (result.user.refreshToken) {
                            localStorage.setItem('user', JSON.stringify(result.user.refreshToken));
                        }
                        router.push("/");
                    },
                    err => {

                        dispatch('alert/error', err, { root: true });

                    }
                );
        },

        logout({ commit }) {
            localStorage.removeItem('user');
            commit('logout');
        }
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        registerRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
}