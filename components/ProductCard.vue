<script setup>
import { useStore } from "../store/store";
import { addToCart } from "~/composables/addToCart";
const { product } = defineProps(['product']);

const store = useStore();

function formatUzs(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const item = computed(() => {
    let item = {
        image: product.image,
        title: product.title,
        id: product.id,
        price: product.price,
        quantity: 1
    }
    return item
})

const productCart = computed(() => {
    return Boolean(store.cart.find((el) => el.id == product.id));
});

const isClient = typeof window !== 'undefined';
</script>

<template>
    <div>
        <div class="card">
            <img :src="product.image" class="card-img-top" alt="Product image">
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>

                <button v-if="isClient" class="product-cart-btn" @click="addToCart(item)"
                    :class="{ 'active-cart': productCart }">
                    <svg fill="black" style="width: 20px;" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    </svg>
                </button>

                <div class="card-footer">
                    <span class="price">{{ formatUzs(product.price) }} UZS</span>
                    <button class="btn btn-primary">Sotib Olish</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.card {
    border-radius: 15px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    position: relative;
}

.active-cart svg {
    fill: #ff7f00 !important;
}

.product-cart-btn {
    border: none;
    background: none;
    position: absolute;
    top: 10px;
}

.card-img-top {
    width: 100%;
    height: 100px;
    padding-top: 5px;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.card-img-top:hover {
    transform: scale(1.05);
}

.card-body {
    padding: 15px;
    flex-grow: 1;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.card-text {
    font-size: 0.95rem;
    color: #555;
}

.card-footer {
    display: flex;
    flex-direction: column;
    gap: 7px;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border-top: 1px solid #ddd;
}

.price {
    padding: 8px 0;
    font-weight: bold;
    color: #2b9b3d;
    font-size: 17px;
}

.btn-primary {
    width: 100%;
    background-color: #ff7f00;
    border-color: #ff7f00;
}

.btn-primary:hover {
    background-color: #e76f00;
    border-color: #e76f00;
}
</style>
