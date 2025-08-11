import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../../shared/types/types';
import { fetchProducts } from './VegetableThunk';

interface VegetableState {
  products: Product[];
  quantity: Record<number, number>;
  isLoading: boolean;
  error: string;
  cart: Product[];
}

export const initialState: VegetableState = {
  products: [],
  quantity: {},
  isLoading: false,
  error: '',
  cart: [],
};

export const vegetableSlice = createSlice({
  name: 'vegetable',
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<{ id: number }>) {
      const product = state.products.find(
        (item) => item.id === action.payload.id,
      );

      if (!product) return;

      const isProductInCard = state.cart.some(
        (item) => item.id === action.payload.id,
      );

      if (isProductInCard) return;

      state.cart.push({ ...product });
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increment(state, action: PayloadAction<{ id: number }>) {
      state.quantity[action.payload.id] =
        (state.quantity[action.payload.id] || 1) + 1;
    },

    decrement(state, action: PayloadAction<{ id: number }>) {
      state.quantity[action.payload.id] = Math.max(
        (state.quantity[action.payload.id] || 1) - 1,
        0,
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.products = action.payload;
        },
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addCart, removeFromCart, increment, decrement } =
  vegetableSlice.actions;

export default vegetableSlice.reducer;
