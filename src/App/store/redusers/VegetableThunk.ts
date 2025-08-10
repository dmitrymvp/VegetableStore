import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Product } from '../../../shared/types/types';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Product[]>(
        'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json',
      );
      return response.data;
    } catch (e) {
      return rejectWithValue('Не удалось загрузить список продуктов');
    }
  },
);
