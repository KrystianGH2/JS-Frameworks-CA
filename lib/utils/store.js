import {create} from 'zustand';

export const initialState = {
  isOpen: false,
  cart: [],
  items:[],
  total: 0,
  count: 0,
};

const usePaginationStore = create((set) => ({
  currentPage: 1,
  limit: 25,
  setCurrentPage: (page) => set({ currentPage: page, }),

  ...initialState,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),

  addToCart: (item) => {
    set((state) => {
      let newItems = [];

      const product = state.items.find((stateItem) => stateItem.id === item.id);

      if (product) {
        product.quantity = product.quantity + 1;
        newItems = state.items.map((i) => (i.id === product.id ? product : i));
      } else {
        newItems = [...state.items, { ...item, quantity: 1 }];
      }

      const total = calcTotal(newItems);
      return { items: newItems, total, count: calcCount(newItems) };
    });
  },

  removeItem: (item) => {
    set((state) => {
      let newItems = [];

      if (item.quantity > 1) {
        item.quantity = item.quantity - 1;
        newItems = state.items.map((i) => (i.id === item.id ? item : i));
      } else {
        newItems = state.items.filter((i) => i !== item);
      }

      const total = calcTotal(newItems);
      return { items: newItems, total, count: calcCount(newItems) };
    });
  },


    removeItemMaxQuantity: (item) => {
    set((state) => {
      const newItems = state.items.filter((i) => i !== item);
      const total = calcTotal(newItems);
      return { items: newItems, total, count: calcCount(newItems) };
    });
  },

  clearCart: () => {
    set({ items: [], total: 0, count: 0 });
  },
}));

function calcTotal(cart) {
  const total = cart.reduce((currentTotal, product) => {
    const itemTotalPrice = product.discountedPrice * product.quantity;
    currentTotal += itemTotalPrice;
    return currentTotal;
  }, 0);
  
  return Number(total.toFixed(2)); 
}
function calcCount(cart) {
  return cart.reduce((currentCount, product) => {
    currentCount += product.quantity;
    return currentCount
  }, 0);
}

export default usePaginationStore;
