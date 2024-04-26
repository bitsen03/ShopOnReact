import { configureStore } from '@reduxjs/toolkit';
import backetSlice from './backetSlice';
import productsSlice from './productsSlice';

export default configureStore({
    reducer: {
        backet: backetSlice,
        products: productsSlice,
    }
})