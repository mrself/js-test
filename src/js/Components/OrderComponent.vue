<template>
    <div>
        <div class="order" v-show="showModal">
            <form class="order__inner">
                <button class="order__close" @click="hideModal" type="button">
                    <i class="order__close__icon fas fa-arrow-left"></i>
                </button>
                <div class="order__img">
                    <img :src="order.images.full_size" :alt="order.name">
                </div>

                <div class="order__content">
                    <h1 class="order__title">{{ order.name }}</h1>
                    <a class="order__publication" :href="order.publication">{{ order.publication }}</a>
                    <div></div>
                    <input class="order__description form-control" type="text" :placeholder="order.full_description" name="description">
                    <div class="order__formGroup form-group">
                        <label for="order__source">Source</label>
                        <input id="order__source" type="text" class="order__source form-control" :placeholder="order.Order_details[0].placeholder" :name="order.Order_details[0].name">
                    </div>
                    <div class="order__formGroup form-group">
                        <label for="order__instructions">Source</label>
                        <textarea id="order__instructions" type="text" class="form-control order__instructions" :name="order.Order_details[1].name" :placeholder="order.Order_details[1].placeholder"></textarea>
                    </div>
                </div>
            </form>
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