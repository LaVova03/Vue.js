import { createStore } from 'vuex';
import state from './state';

export default createStore({
    modules: { state }
});