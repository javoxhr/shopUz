<script setup>
import { useStore } from "../store/store"

const store = useStore()
</script>

<template>
    <div>
        <div class="top">
            <NuxtLink to="/cart">
                <button class="cart-btn"><img src="../assets/images/svg/cart.svg" alt=""><span class="cart-count">{{
                    store.cart.length }}</span>
                </button>
            </NuxtLink>
            <h1>Salom Java! 🖐</h1>
        </div>
    </div>
</template>

<style>
.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
}

.cart-count {
    width: 25px;
    height: 25px;
    padding-bottom: 2px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 12px;
    position: absolute;
    top: -10px;
    right: -10px;
}

.top h1 {
    margin: 0;
}

.cart-btn {
    width: 50px;
    height: 50px;
    border-radius: 25%;
    background: #ff7f00;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.cart-btn:hover {
    opacity: 0.9;
}
</style>