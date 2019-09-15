import Vue from 'vue';
import orderData from './order';
import OrderComponent from './Components/OrderComponent.vue';

$(() => {
    new Vue({
        el: '#app',
        data: {
            orderData
        },
        components: {OrderComponent}
    })
});