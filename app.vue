<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '../store/store';

const store = useStore()

import { useNuxtApp } from '#app';
import { collection, getDocs } from 'firebase/firestore';

const products = ref([]);
const loading = ref(true);

const nuxtApp = useNuxtApp();
const db = nuxtApp.$db;

const fetchProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  products.value = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  store.products = products.value
  console.log(store.products)
};

onMounted(() => {
  fetchProducts();
  if (process.client) {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      store.cart = JSON.parse(storedCart);
    }
  }
});
</script>

<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>