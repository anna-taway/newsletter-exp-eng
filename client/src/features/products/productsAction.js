import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        return fetch('http://localhost:8000/products').then( (res) =>
            res.json()
        );
    }
)