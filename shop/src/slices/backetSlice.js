import { 
    createSlice,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import allProducts from '../allProducts';

const backetAdapter = createEntityAdapter();

const initialState = backetAdapter.getInitialState({
    ids: [],
    entities: {
      
    }
});

const backetSlice = createSlice({
    name: 'backet',
    initialState,
    reducers: {
        addOrders: backetAdapter.addMany,
        addOrder: backetAdapter.addOne,
        removeOrder: backetAdapter.removeOne,
    }
})

export const selectAllbacketItems = state => state.backet.entities;
export const {addOrder, addOrders, removeOrder} = backetSlice.actions;
export default backetSlice.reducer;
