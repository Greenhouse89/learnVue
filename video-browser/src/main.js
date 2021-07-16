import Vue from 'vue';
import App from './App';

new Vue ({
    el: '#qpp', //is getting replaced by .$mount below
    render: h => h(App)
    /* function(h) {
        return h(App);
        h is create element  */
})//.$mount('#app');