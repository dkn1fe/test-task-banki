// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
// Import Vue Carousel 

import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";

Vue.use(Flicking)

// Import Vue App, routes, store
import App from '@/app/App';

// Import style
import '@/content/style.scss'

Vue.use(VueRouter);


new Vue({
    el: '#app',
    render: h => h(App),
});
