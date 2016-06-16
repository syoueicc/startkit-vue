import Vue from "vue";
import Vuex from "vuex";

import {TEST, TESTTEST} from "./mutation-type";

Vue.use(Vuex);

const state = {
    count: 0
};

const mutations = {
    [TEST](state, amount) {
        state.count++;
    },
    [TESTTEST] (state) {
    	state.count--;
    	console.log(123);
    }
}

export default new Vuex.Store({
    state,
    mutations
})