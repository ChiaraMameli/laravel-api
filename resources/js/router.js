import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';

Vue.use(VueRouter);

const routes = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage},
        {path: '/about-us', component: AboutUsPage}

    ]
})

export default routes;