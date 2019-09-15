<template>
    <div>
        <div class="order" v-show="showModal">
            <button class="order__close" @click="showModal = false">
                <i class="fas fa-arrow-left"></i>
            </button>
            <div class="order__img">
                <img :src="order.images.thumbnail" :alt="order.name">
            </div>
        </div>

        <button @click="showModal = true">Create new content</button>
    </div>
</template>

<script>
    export default {
        name: "OrderComponent",

        data() {
            return {
                showModal: false
            };
        },

        props: {
            order: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>