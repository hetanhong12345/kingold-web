import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('../containers/Index');

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/',
            name: 'index',
            component: Index
        }
    ]
})
