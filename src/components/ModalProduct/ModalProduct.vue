<template>
    <div class="">
        <div v-if="isModal" class="modal-product">
            <img class="modal-img" :src='message.img' alt="logo">
            <h2>{{ message.name }}</h2>
            {{ message.description }}
            <div class="buttons-modal">
                <button class="buton-modal-style" type="button" @click="setBasket({ name: message.name, price: message.price })">Add Basket</button>
                <button class="buton-modal-style" type="button" @click="closeModal">Close Modal</button>
            </div>
        </div>
        <div v-if="isModalBasket" class="modal-basket">
            <div id="header">
                <slot name="header"></slot>
            </div>
            <div id="body">
                <slot name="body"></slot>
            </div>
            <div id="bottom">
                <slot name="bottom"></slot>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ModalProduct',
    props: {
        message: Object,
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            isModal: 'getIsModal',
            basket: 'getBasket',
            isModalBasket: 'getIsModalBasket',
        }),
    },
    methods: {
        ...mapMutations(['closeIsModal', 'addBasket']),
        closeModal() {
            this.closeIsModal()
        },
        setBasket(payload) {
            this.addBasket(payload)
            this.closeModal()
        },
    },

}
</script>

<style src="./ModalProduct.css"/>