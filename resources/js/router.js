import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import ShowDetailPage from './components/pages/ShowDetailPage';
import FoundErrorPage from './components/pages/FoundErrorPage';

Vue.use(VueRouter);

const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/about', component: AboutUsPage, name: 'about-us'},
        {path: '/posts/:slug', component: ShowDetailPage, name: 'show-detail'},

        // ! Must be last
        {path: '*', component: FoundErrorPage}
    ]
})

export default routes;