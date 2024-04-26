import { 
    createSlice,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import allProducts from '../allProducts';

const backetAdapter = createEntityAdapter();

const initialState = backetAdapter.getInitialState({
    ids: [allProducts.products[0]],
    entities: {
        [allProducts.products[0].id]: allProducts.products[0] // Используем id продукта как ключ и сам продукт как значение
    }
});

const backetSlice = createSlice({
    name: 'backet',
    initialState,
    reducers: {
        addOrders: backetAdapter.addMany,
        addOrder: backetAdapter.addOne,
    }
})

export const selectAllbacketItems = state => state.backet.entities;
export const {addOrder, addOrders} = backetSlice.actions;
export default backetSlice.reducer;
