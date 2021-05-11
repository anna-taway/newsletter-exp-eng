import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productsAction';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        listProducts: [],
        status: null,
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getProducts.fulfilled]: (state, {payload}) => {
            state.status = 'success';
            state.listProducts = payload.data;
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})

export default productsSlice.reducer;
