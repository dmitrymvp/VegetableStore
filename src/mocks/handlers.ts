import { http, HttpResponse } from 'msw';
import { productResponse } from './response';

export const handlers = [
  http.get(
    'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json',
    () => {
      return HttpResponse.json(productResponse);
    },
  ),
];
