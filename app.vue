<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '../store/store';
import { getDocs, collection, query, limit } from 'firebase/firestore';

const store = useStore()

const products = ref([]);
const loading = ref(true);

const nuxtApp = useNuxtApp();
const db = nuxtApp.$db;

const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, 'products'),
        limit(store.limitCount)
      )
    );

    const productsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    if (productsData.length < store.limitCount) {
      store.moreProductBtn = false
    }

    products.value = productsData;
    store.products = products.value;
    loading.value = false;

    console.log(products.value);

  } catch (error) {
    console.error("Error fetching products: ", error);
    loading.value = false;
  }
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

watchEffect(() => {
  fetchProducts();
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