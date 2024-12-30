import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
  const cart = ref([]);
  if (process.client) {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cart.value = JSON.parse(storedCart);
    }
  }

  const products = ref([])

  return {
    cart,
    products
  };
});
