import axios from 'axios';
import config from '../../../config.json'
const ax = axios.create({
    baseURL: config.baseUrl,
});
const url = 'user.json';

const state = {
    userList: []
}
const getters = {
    getUsers(state) {
        return state.userList;
    }
}
const actions = {
    getUsers(context) {
        ax.get(url)
            .then(response => {
                context.commit('getUsers', response.data)
            })
            .catch(error => {
                console.log('error', error);
            })
    }
}
const mutations = {
    getUsers(state, payload) {
        state.userList = payload.data;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}