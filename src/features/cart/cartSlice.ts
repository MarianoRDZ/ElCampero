import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id:       string;
  name:     string;
  price:    number;
  quantity: number;
  image:    string;
}

interface CartState {
  items:  CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items:  [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, 'quantity'>>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.isOpen = true;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.quantity = Math.max(1, action.payload.quantity);
    },
    clearCart(state) {
      state.items = [];
    },
    openCart(state)   { state.isOpen = true;  },
    closeCart(state)  { state.isOpen = false; },
    toggleCart(state) { state.isOpen = !state.isOpen; },
  },
});

export const {
  addItem, removeItem, updateQuantity, clearCart,
  openCart, closeCart, toggleCart,
} = cartSlice.actions;

export const selectCartItems      = (state: { cart: CartState }) => state.cart.items;
export const selectCartIsOpen     = (state: { cart: CartState }) => state.cart.isOpen;
export const selectCartTotalItems = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
export const selectCartTotalPrice = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

export default cartSlice.reducer;
