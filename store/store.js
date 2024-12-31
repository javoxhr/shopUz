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
  const limitCount = 8
  const moreProductBtn = ref(true)
  const loader = ref(true)
  return {
    cart,
    products,
    limitCount,
    moreProductBtn,
    loader
  };
});
