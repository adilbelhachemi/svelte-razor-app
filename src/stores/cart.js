import { writable, derived } from 'svelte/store';
// import localCart from '../localCart';

// cart
// const cart = writable([...localCart]);
const cart = writable(getStorageCart());

// --cart total
// if we need to reuse a function based on the store
// we can use a derived
export const cartTotal = derived(cart, ($cart) => {
  let total = $cart.reduce((acc, curr) => {
    return (acc += curr.amount * curr.price);
  }, 0);

  return total.toFixed(2);
});

// local functions
const remove = (id, items) => {
  return items.filter((item) => item.id !== id);
};

const toggleAmount = (id, items, action) => {
  return items.map((item) => {
    let newAmount;
    if (action === 'inc') {
      newAmount = item.amount + 1;
    } else if (action === 'dec') {
      newAmount = item.amount - 1;
    } else {
      newAmount = item.amount;
    }

    return item.id === id ? { ...item, amount: newAmount } : { ...item };
  });
};

// global functions
export const removeItem = (id) => {
  cart.update((storeValue) => {
    return remove(id, storeValue);
  });
};

export const increaseAmount = (id) => {
  cart.update((storeValue) => {
    let arr = toggleAmount(id, storeValue, 'inc');
    return arr;
  });
};

export const decreaseAmount = (id, amount) => {
  cart.update((storeValue) => {
    return amount === 1
      ? remove(id, storeValue)
      : toggleAmount(id, storeValue, 'dec');
  });
};

export const addToCart = (product) => {
  cart.update((storeValue) => {
    const { id, image, title, price } = product;
    let item = storeValue.find((item) => item.id === id);
    let cart;
    if (item) {
      cart = toggleAmount(id, storeValue, 'inc');
    } else {
      let newItem = { id, image, title, price, amount: 1 };
      cart = [...storeValue, newItem];
    }
    return cart;
  });
};

// lcoalStorage
function getStorageCart() {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
}

export function setStorageCart(cartValues) {
  localStorage.setItem('cart', JSON.stringify(cartValues));
}

export default cart;
