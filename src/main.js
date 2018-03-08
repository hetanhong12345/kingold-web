import Vue from 'vue';
import 'flex.css/dist/flex.css';
import './less/base.less';
import App from './App';
import router from './router';
import store from './store';
import * as filters from './filters';
import $api from './tools/api';

Vue.prototype.$api = $api;

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
store.dispatch('getUserInfo');
store.dispatch('getBaofoo');

