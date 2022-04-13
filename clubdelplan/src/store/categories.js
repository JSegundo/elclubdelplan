import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllCategories = createAsyncThunk('CATEGORIES', async () => {
    try {
        const res = await axios.get('http://localhost:3001/api/categories');
        return res.data;
    } catch (err) {
        console.error(err);
    }
});

const categoriesReducer = createReducer(
    [],
    {
        [getAllCategories.fulfilled]: (state, action) => action.payload,
    },
);

export default categoriesReducer;