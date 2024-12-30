<script setup>
import { computed } from 'vue'

const order = {
    items: [
        { name: 'Product 1', price: 25000 },
        { name: 'Product 2', price: 15000 },
        { name: 'Product 3', price: 20000 }
    ],
    customer: {
        name: 'John Doe',
        address: '123 Main Street, Tashkent'
    }
}

const totalPrice = computed(() =>
    order.items.reduce((sum, item) => sum + item.price, 0)
)
</script>

<template>
    <div class="container mt-5">
        <div class="card shadow-sm">
            <div class="card-body">
                <h2 class="text-center mb-4">Order Receipt</h2>
                <div class="mb-3">
                    <h5 class="fw-bold">Order Details</h5>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center"
                            v-for="(item, index) in order.items" :key="index">
                            <span>{{ item.name }}</span>
                            <span>{{ item.price }} UZS</span>
                        </li>
                    </ul>
                </div>
                <div class="mb-3">
                    <h5 class="fw-bold">Customer Information</h5>
                    <p class="mb-1"><strong>Name:</strong> {{ order.customer.name }}</p>
                    <p class="mb-1"><strong>Address:</strong> {{ order.customer.address }}</p>
                </div>
                <div class="mb-3">
                    <h5 class="fw-bold">Total</h5>
                    <p class="fs-4 fw-bold text-primary">{{ totalPrice }} UZS</p>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-success btn-lg">
                        Confirm Order
                    </button>
                    <button class="btn btn-danger btn-lg">
                        Cancel Order
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 500px;
}

.card {
    border-radius: 15px;
}

.btn {
    border-radius: 10px;
}
</style>