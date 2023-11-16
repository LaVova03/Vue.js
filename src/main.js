import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/Routers';
import store from './store/state';

const app = createApp(App);

app.use(router);

app.use(store);

app.mount('#app');
