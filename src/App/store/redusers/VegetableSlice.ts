import { createSlice } from '@reduxjs/toolkit';
import type { Product } from '../../../shared/types/types';

interface VegetableState {
  products: Product[];
  isLoading: boolean;
  error: string;
}

export const initialState: VegetableState = {
  products: [],
  isLoading: false,
  error: '',
};

export const vegetableSlice = createSlice({
  name: 'vegetable',
  initialState,
  reducers: {
    getData() {},
  },
});

export const { getData } = vegetableSlice.actions;

export default vegetableSlice.reducer;
