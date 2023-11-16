<template>
    <div class="products-card">
        <div class="products-card-header">
            <ul class="card-header-left">
                <li class="li-left" id="microsoft"><img class="img-products-microsoft" src="../../assets/microsoft.png"
                        alt="logo"></li>
                <li class="li-left">Microsoft 365</li>
                <li class="li-left">Office</li>
                <li class="li-left">Windows</li>
                <li class="li-left">Xbox</li>
                <li class="li-left">Поддержка</li>
            </ul>
            <ul class="card-header-right">
                <li class="li-right">
                    <select id="select" name="car">
                        <option value="">Продукты Microsoft</option>
                        <option value="1">Xbox Series X</option>
                        <option value="2">Microsoft Edge</option>
                        <option value="3">Microsoft OneDrive</option>
                        <option value="4">OneNote</option>
                    </select>
                </li>
                <li class="li-right"><img class="img-products-look" src="../../assets/look.png" alt="logo">
                    <button class="button-header" @click="setLook">Поиск</button>
                </li>
                <li class="li-right"><img class="img-products-basket" src="../../assets/basket.png" alt="logo">
                    <button class="button-header" @click="showBasket">Корзина</button>
                </li>
                <li class="li-right"><img class="img-products-person" src="../../assets/person.png" alt="logo">
                    <button class="button-header" @click="resetLocalStorage">Выйти</button>
                </li>
            </ul>
        </div>
        <div class="products-body">
            <h1 class="text-body">Разработано для жизни - <br />сегодня и в будущем</h1>
            <h3 class="text-body">Следующее поколение игор. Ваши цели. Друзья и семья. С Windows 11 вы <br />
                станете еще блтже к тому, что успели полюбить.</h3>
            <button class="check-pk" @click="checkPc">Проверьте, готов ли Ваш ПК ></button>
        </div>
        <div class="bottom-grid">
            <div class="grid-card" v-for="item in microsoft" :key="item" @click="setModal(item)">
                <img class="item-img" :src='item.img' alt="logo">
                <div class="grid-card-header">{{ item.name }}</div>
                <div class="grid-card-description">{{ item.description }}</div>
            </div>
        </div>
        <div class="basket-modal" v-if="$store.state.isModal || $store.state.isModalBasket">
            <ModalProduct :message="products">
                <template v-slot:header>
                    <h2>Ваша корзина продуктов</h2>
                </template>
                <template v-slot:body>
                    <ul>
                        <li v-for="i in basket" :key="i">
                            <div class="grid-basket">
                                <div class="name-item-basket"> {{ i.name }}</div>
                                <div class="price-item-basket"> : {{ i.price }}$
                                    <button class="img-button-delete" @click="delerePosition(i)"> <img class="img-dry"
                                            src="../../assets/dry.png" alt="logo"></button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </template>
                <template v-slot:bottom>
                    <div class="grid-sum">
                        <div> Сумма к оплате</div>
                        <div class="sum-price"> :{{ checkSum() }}$</div>
                    </div>
                    <button class="order-product" @click="setOrder">Заказать</button>
                    <button class="close-modal-basket" @click="closeBasket">Закрыть</button>
                </template>
            </ModalProduct>
        </div>
        <div class="pc-modal" v-if="$store.state.isModalChackPc || $store.state.isLooking">
            <ModalCheckPk />
        </div>
    </div>
</template>

<script>

import ModalProduct from '../ModalProduct/ModalProduct.vue';
import ModalCheckPk from '../ModalChackPc/ModalCheckPc.vue';
import mixins from '../../mixins/mixins';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ProductsCard',
    components: {
        ModalProduct,
        ModalCheckPk,
    },
    mixins: [mixins],
    data() {
        return {
            selectedCar: null,
            showDefaultOption: true,
            products: null,
        }
    },
    computed: {
        ...mapGetters({
            isModal: 'getIsModal',
            basket: 'getBasket',
            isModalBasket: 'getIsModalBasket',
            isModalChackPc: 'getIsModalChackPc',
            isLooking: 'getIsLoking',
        }),
    },
    methods: {
        removeDefaultOption() {
            this.showDefaultOption = false;
        },
        resetLocalStorage() {
            localStorage.clear();
            const token = localStorage.getItem('dg213f1b56d1bd');
            if (token) {
                console.log('Токен существует:', token);
            } else {
                this.$router.push({ name: 'loginMain' })
            }
        },
        ...mapMutations(['setIsModal', 'setIsModalBasket', 'closeIsModal', 'closeIsModalBasket', 'deleteBasket',
            'cleanBasket', 'setIsModalChackPc', 'setIsLoking']),
        setModal(item) {
            this.products = item
            this.setIsModal()
            this.closeIsModalBasket()
        },
        showBasket() {
            this.setIsModalBasket()
            this.closeIsModal()
        },
        closeBasket() {
            this.closeIsModalBasket()
        },
        setOrder() {
            this.cleanBasket()
            this.closeIsModalBasket()
        },
        checkSum() {
            let sum = 0;
            for (let key in this.basket) {
                sum += this.basket[key].price
            }
            return sum
        },
        delerePosition(i) {
            this.deleteBasket(i)
        },
        checkPc() {
            this.setIsModalChackPc()
            console.log(this.getIsModalChackPc)
        },
        setLook() {
            this.setIsLoking()
        }
    }
}
</script>

<style src="./ProductsCard.css" scoped/>