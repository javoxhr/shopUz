import { useStore } from "~/store/store";

export const addToQuantity = (item, action) => {
  const store = useStore();
  const cartItem = store.cart.find((el) => el.id === item.id);
  if (cartItem) {
      if (action === 'increase') {
          cartItem.quantity += 1;
      } else if (action === 'decrease' && cartItem.quantity > 1) {
          cartItem.quantity -= 1;
      }
  }
  localStorage.setItem("cart", JSON.stringify(store.cart));
};

