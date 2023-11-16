import { createRouter, createWebHistory } from 'vue-router';

import LoginMain from '../containers/LoginMain/LoginMain.vue';
import ErrorPage404 from '../containers/ErrorPage404/ErrorPage404';
import ProductsMain from '../containers/ProductsMain/ProductsMain.vue';

const routes = [
    {
        path: '/',
        component: LoginMain,
        name: 'loginMain',
    },
    {
        path: '/productsMain',
        component: ProductsMain,
        name: 'productsMain',
    },
    {
        path: '/:catchAll(.*)',
        component: ErrorPage404,
        name: '404',
    },
    // {
    //     path: '/:catchAll(.*)',
    //     redirect: { name: 'pageOne' },
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
