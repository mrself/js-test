import Vue from 'vue';
import orderData from './order';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import OrderComponent from './Components/OrderComponent.vue';

$(() => {
    new Vue({
        el: '#app',
        data: {
            orderData
        },
        components: {OrderComponent}
    });

    $('.orderTrigger').click();
});