<template>
    <div>
        <div class="order" v-show="showModal">
            <form class="order__inner" @submit.prevent="submit">
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
                        <input id="order__source" type="text" class="order__source form-control" :class="{'is-invalid': $v.source.$error}" :placeholder="order.Order_details[0].placeholder" :name="order.Order_details[0].name" v-model="source">
                        <div class="invalid-feedback" v-if="!$v.source.url">
                            Please provide a valid url.
                        </div>
                        <div class="invalid-feedback" v-if="!$v.source.required">
                            This field should not be blank.
                        </div>
                    </div>
                    <div class="order__formGroup form-group">
                        <label for="order__instructions">Instructions</label>
                        <textarea id="order__instructions" class="form-control order__instructions" :name="order.Order_details[1].name" :placeholder="order.Order_details[1].placeholder" v-model="instructions" :class="{'is-invalid': $v.instructions.$error}"></textarea>
                        <div class="invalid-feedback" v-if="!$v.instructions.between">
                            The words count in this fields should be more than 0 and less than 50.
                        </div>
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
                                    <input id="order__budget" type="text" class="form-control"  :name="order.Order_details[2].name" v-model="budget" :class="{'is-invalid': $v.budget.$error}">
                                    <div class="invalid-feedback" v-if="!$v.budget.between">
                                        This number should be between 5 and 500.
                                    </div>
                                    <div class="invalid-feedback" v-if="!$v.budget.required">
                                        This field should not be blank.
                                    </div>
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
    import {required, url, between} from 'vuelidate/lib/validators';
    import wordsBetween from '../Validators/WordsBetween';

    export default {
        name: "OrderComponent",

        data() {
            return {
                isModalShown: false,
                total: 0,
                source: '',
                instructions: '',
                budget: 0
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
            },

            submit() {
                this.$v.$touch();
            }
        },

        mounted() {
            this.el = $('.order');
            console.log(this);
        },

        validations: {
            source: {required, url},
            budget: {
                between: between(5, 500),
                required
            },
            instructions: {
                wordsBetween: wordsBetween(0, 51)
            }
        }
    }
</script>

<style scoped>

</style>