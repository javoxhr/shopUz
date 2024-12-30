<script setup>
import { useStore } from "../store/store"
import ProductCard from "@/components/ProductCard"

const store = useStore()
</script>

<template>
    <div>
        <div class="grid">
            <ProductCard v-for="item in store.products" :key="item.id" :product="item" />
        </div>
        <button v-if="store.moreProductBtn" @click="store.limitCount += 8" class="btn" style="color: #fff; background: #ff7f00; width: 100%; margin: 10px 0;">Yana Mahsulot</button>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 10px;
}
</style>
