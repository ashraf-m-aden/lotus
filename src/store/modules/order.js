import axios from 'axios';
import order from '../../data/order.json';

import config from '../../../config.json'
const ax = axios.create({
    baseURL: config.baseUrl,
});
const url = 'order.json';
const transactionUrl = 'transactions.json';

const state = {
    orders: [],
    orderList: order.data,
    transactions: []
}
const getters = {
    getOrders(state) {
        return state.orders;
    },
    getOrdersDashboard(state) {
        return state.orderList;
    },
    getTransactions(state) {
        return state.transactions;
    }
}
const actions = {
    getOrders: (context) => {
        ax.get(url)
            .then(response => {
                context.commit('getOrders', response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
    },

    getTransactions: (context) => {
        ax.get(transactionUrl)
            .then(response => {
                context.commit('getTransactions', response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
    },
    // OrderList
    getOrderList(context) {
        context.commit('getOrderList', order.data);
    }
}
const mutations = {
    getOrders(state, payload) {
        state.orders = payload.data
    },
    getTransactions(state, payload) {
        state.transactions = payload.data;
    },
    // OrderList
    getOrderList(state, payload) {
        state.orderList = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}