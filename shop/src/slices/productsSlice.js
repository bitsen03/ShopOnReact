import { 
    createSlice,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import allProducts from '../allProducts';

const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState({
    // Добавление начального списка товаров
    ids: allProducts.products.map(product => product.id),
    entities: allProducts.products,
  });

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: productsAdapter.addMany,
    }
})

export const selectAllProducts = state => state.products.entities;
export const {addProducts} = productsSlice.actions;
export default productsSlice.reducer;