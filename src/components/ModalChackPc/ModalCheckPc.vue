<template>
    <div v-if="isModalChackPc" class="modal-pc">
        Проверить Ваше ПК?
        <br />
        <br />
        {{ loading ? 'loading...' : '' }}
        <br />
        <button class="button-check-pc" @click="checkPc">Проверить</button>
        <button class="button-check-pc" @click="closeChechPc">Отменить</button>
    </div>
    <div v-if="isLooking" class="modal-look">
        Поиск
        <input type="text">
        <br />
        {{ pleaseWait ? 'please wait...' : '' }}
        <br />
        <button class="button-look" @click="serchLooking">Поиск</button>
        <button class="button-look" @click="closeIsLoking">Отмена</button>
    </div>
</template>


<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ModalCheckPk',
    data() {
        return {
            loading: false,
            pleaseWait: false,
        }
    },
    computed: {
        ...mapGetters({
            isModalChackPc: 'getIsModalChackPc',
            isLooking: 'getIsLoking',
        }),
    },
    methods: {
        ...mapMutations(['closeIsModalCheckPc', 'closeloking']),
        closeChechPc() {
            this.closeIsModalCheckPc()
        },
        checkPc() {
            this.loading = true
        },
        closeIsLoking() {
            this.closeloking()
        },
        serchLooking() {
            this.pleaseWait = true
        }
    }
}
</script>

<style src="./ModalCheckPc.css"/>