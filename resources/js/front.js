require('./bootstrap');
window.Vue = require('vue');

import App from './components/App.vue';
import router from './router';

const root = new Vue({
    el: '#root',
    render:h => h(App),
    router: router
});