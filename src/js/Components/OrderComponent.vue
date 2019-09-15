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
                        <label for="order__instructions">Instructions</label>
                        <textarea id="order__instructions" type="text" class="form-control order__instructions" :name="order.Order_details[1].name" :placeholder="order.Order_details[1].placeholder" v-model="instructions"></textarea>
                    </div>

                    <div class="row">
                        <div class="col-sm-7">
                            <div class="order__formGroup form-group">
                                <label for="order__writersNumber">Number of writers</label>
                                <select class="form-control" :name="order.Order_details[2].name" id="order__writersNumber">
                                    <option :value="number + 1" v-for="number in getWritersNumbers()">{{ number + 1 }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="order__formGroup">
                                <label for="order__budget">Budget (USD)</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">$</div>
                                    </div>
                                    <input id="order__budget" type="text" class="form-control"  :name="order.Order_details[2].name">
                                </div>
                            </div>
                        </div>
                    </div>

                    <p class="order__optionsLabel">Please select options (optional)</p>

                    <div class="order__options">
                        <div class="order__option row" v-for="option in order.options">
                            <div class="col-sm-4">{{ option.name }}</div>
                            <div class="order__optionDiff col-sm-4">
                                (add
                                <span v-if="option.increase">{{ option.increase }}%</span>
                                <span v-else>${{ option.price }}</span>)
                            </div>
                            <div class="col-sm-3">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" :id="'option' + option.id">
                                    <label class="custom-control-label" :for="'option' + option.id"></label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="order__submit">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Submit</span>
                        <span class="order__total">
                            $ {{ total }}
                        </span>
                    </button>
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
                isModalShown: false,
                total: 0
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
            },

            getWritersNumbers() {
                return [...Array(15).keys()];
            }
        },

        mounted() {
            this.el = $('.order');
        }
    }
</script>

<style scoped>

</style>