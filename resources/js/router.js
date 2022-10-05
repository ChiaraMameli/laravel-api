import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import FoundErrorPage from './components/pages/FoundErrorPage';

Vue.use(VueRouter);

const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/about-us', component: AboutUsPage, name: 'about-us'},


        // ! Must be last
        {path: '*', component: FoundErrorPage}
    ]
})

export default routes;