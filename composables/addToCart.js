import { useStore } from "~/store/store";

export const addToCart = (product) => {
  const store = useStore();
  const item = toRaw(store.cart).find(el => el.id === product.id);

  if (!item) {
    store.cart.push({...product, quantity: 1});
  } else {
    store.cart = store.cart.filter(el => el.id !== product.id);
  }

  localStorage.setItem("cart", JSON.stringify(store.cart));
};
