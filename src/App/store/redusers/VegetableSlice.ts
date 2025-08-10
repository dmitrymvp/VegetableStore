import { createSlice } from '@reduxjs/toolkit';

interface VegetableState {
  products: [];
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
  reducers: {},
});
