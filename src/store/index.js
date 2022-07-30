import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu.js'
import user from './modules/user.js'
import { authentication } from './modules/authentication.js'
import reports from './modules/reports.js';
import order from './modules/order.js';
import employee from './modules/employee.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {
        changeLang(state, payload) {
            localStorage.setItem('currentLanguage', payload.id)
            localStorage.setItem('currentLanguageIcon', payload.icon)
            window.location.reload();
        }
    },
    actions: {
        setLang({ commit }, payload) {
            commit('changeLang', payload)
        }
    },
    modules: {
        menu,
        user,
        authentication,
        reports,
        order,
        employee
    }
})