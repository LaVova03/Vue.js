<template>
    <div class="products-main">
        <ProductsCard />
    </div>
</template>

<script>

import ProductsCard from '../../components/ProductsCard/ProductsCard.vue'

export default {
    name: 'ProductsMain',
    components: {
        ProductsCard,
    }
}
</script>

<style src="./ProductsMain.css"/>