import axios from "axios";
import config from '../../../config.json'
const ax = axios.create({
    baseURL: config.baseUrl,
});
const url = 'transfer.json';

const state = {
    transfer: []
}
const getters = {
    getTransferData(state) {
        return state.transfer;
    }
}
const actions = {
    getTransferData(context) {
        ax.get(url)
            .then(response => {
                context.commit('getTransferData', response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
}
const mutations = {
    getTransferData(state, payload) {
        state.transfer = payload.data;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}