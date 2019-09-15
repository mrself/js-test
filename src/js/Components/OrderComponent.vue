<template>
    <div>
        <div class="order" v-show="showModal">
            <div class="order__inner">
                <button class="order__close" @click="hideModal">
                    <i class="order__close__icon fas fa-arrow-left"></i>
                </button>
                <div class="order__img">
                    <img :src="order.images.full_size" :alt="order.name">
                </div>
            </div>
        </div>

        <button class="orderTrigger" @click="showModal">Create new content</button>
    </div>
</template>

<script>
    export default {
        name: "OrderComponent",

        data() {
            return {
                isModalShown: false
            };
        },

        props: {
            order: {
                type: Object
            }
        },

        methods: {
            showModal() {
                this.isModalShown = true;
                this.el.addClass('order--active');
            },

            hideModal() {
                this.isModalShown = false;
                this.el.removeClass('order--active');
            }
        },

        mounted() {
            this.el = $('.order');
        }
    }
</script>

<style scoped>

</style>