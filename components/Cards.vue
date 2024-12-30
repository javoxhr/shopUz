<script setup>
import {useStore} from "../store/store"
import ProductCard from "@/components/ProductCard"

const store = useStore()
</script>

<template>
    <div class="grid">
        <ProductCard v-for="item in store.products" :key="item.id" :product="item" />
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 10px;
}
</style>
