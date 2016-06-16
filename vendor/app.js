import Vue from "vue";
import VueResource from "vue-resource";
import App from "./containers/app.vue";
import store from './vuex/store'
import "./styles/app.less";

Vue.use(VueResource);

new Vue({
    el: "body",
    components: {
        App
    },
    store
})