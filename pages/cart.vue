<script setup>
import { addToQuantity } from "~/composables/addQuan";
import { useStore } from "../store/store";
import { computed } from "vue";

const store = useStore();

function formatUzs(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const totalAmount = computed(() => {
    return store.cart.reduce((total, item) => total + item.price * item.quantity, 0);
});

const isClient = typeof window !== "undefined";

const removeFromCart = (index) => {
    store.cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(store.cart));
};
</script>

<template>
    <div class="container" style="padding: 0;">
        <div class="card shadow-sm">
            <div class="card-header text-black">
                <h3 class="mb-0" style="text-align: center;">Savat</h3>
            </div>
            <div class="card-body" v-if="isClient">
                <span v-if="!store.cart.length"
                    style="display: flex; align-items: center; justify-content: center;">Sizning savtingizda mahsulot
                    yo'q!</span>
                <div v-for="(item, index) in store.cart" :key="item.id"
                    class="d-flex align-items-center mb-3 border-bottom pb-3">
                    <img :src="item.image" class="img-thumbnail me-3" alt="Product"
                        style="width: 80px; height: 80px; object-fit: contain;">
                    <div class="flex-grow-1">
                        <h5 class="mb-1">{{ item.title }}</h5>
                        <p class="mb-0 text-muted">{{ formatUzs(item.price) }} UZS</p>
                    </div>
                    <div class="cart-btns-wrapper">
                        <div class="d-flex align-items-center">
                            <button class="btn btn-outline-secondary btn-sm me-2"
                                @click="addToQuantity(item, 'decrease')">-</button>
                            <span>{{ item.quantity }}</span>
                            <button class="btn btn-outline-secondary btn-sm ms-2"
                                @click="addToQuantity(item, 'increase')">+</button>
                        </div>
                        <button class="btn btn-danger btn-sm w-100" @click="removeFromCart(index)">O'chirish</button>
                    </div>
                </div>
                <!-- Итог -->
                <div class="mt-4 text-end" v-if="store.cart.length">
                    <h4>Jami summa: {{ formatUzs(totalAmount) }} UZS</h4>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between" style="padding: 10px;">
                <NuxtLink to="/purchase" v-if="store.cart.length" style="width: 100%;">
                    <button class="btn w-100" style="background: rgb(255, 127, 0); color: #fff;">Buyurtma
                        berish</button>
                </NuxtLink>
                <NuxtLink v-if="!store.cart.length" to="/" style="width: 100%;">
                    <button class="btn w-100" style="background: rgb(255, 127, 0); color: #fff;">
                        Mahsulotlar
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>
.card-header {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.card-footer {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}

.img-thumbnail {
    border-radius: 10px;
}

.cart-btns-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}
</style>
