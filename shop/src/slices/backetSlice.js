import { 
    createSlice,
    createEntityAdapter,
} from '@reduxjs/toolkit';


const initialState = {
    items: {}
}


const backetSlice = createSlice({
    name: 'backet',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            const {id} = action.payload;
            if (state.items[id]){
                state.items[id].count += 1;
            } else {
                state.items[id] = {...action.payload, 'count': 1,}
            }
        },
        removeOrder: (state, action) => {
            const {id} = action.payload;
            if (state.items[id]){
                state.items[id].count -= 1;
                if (state.items[id].count === 0){
                    delete state.items[id];
                }
            } 
               
            
        },
    }
})

export const selectAllbacketItems = state => state.backet.items;
export const {addOrder, removeOrder} = backetSlice.actions;
export default backetSlice.reducer;
