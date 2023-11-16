import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isModal: false,
            isModalBasket: false,
            isModalChackPc: false,
            isLooking: false,
            basket: [],
        }
    },
    getters: {
        getIsModal: (state) => {
            return (state.isModal)
        },
        getBasket: (state) => {
            return (state.basket)
        },
        getIsModalBasket: (state) => {
            return (state.isModalBasket)
        },
        getIsModalChackPc: (state) => {
            return (state.isModalChackPc)
        },
        getIsLoking: (state) => {
            return (state.isLooking)
        },
    },
    mutations: {
        setIsModal(state) {
            state.isModal = true;
        },
        closeIsModal(state) {
            state.isModal = false;
        },
        setIsModalBasket(state) {
            state.isModalBasket = true;
        },
        closeIsModalBasket(state) {
            state.isModalBasket = false;
        },
        addBasket(state, payload) {
            const existingItem = state.basket.find(el => el.name === payload.name);

            if (existingItem) {
                console.log(existingItem.name + ' already exists in the basket.');
            } else {
                state.basket.push(payload);
            }
        },
        deleteBasket(state, payload) {
            state.basket = state.basket.filter(item => item !== payload);
        },
        cleanBasket(state) {
            state.basket = state.basket.filter(el => el !== el);
        },
        setIsModalChackPc(state) {
            state.isModalChackPc = true;
        },
        closeIsModalCheckPc(state) {
            state.isModalChackPc = false;
        },
        setIsLoking(state) {
            state.isLooking = true;
        },
        closeloking(state) {
            state.isLooking = false;
        }
    },
})

// store.subscribe((mutation, state) => {
//     console.log('Mutation type:', mutation.type);
//     console.log('New state:', state);
// });

export default store;