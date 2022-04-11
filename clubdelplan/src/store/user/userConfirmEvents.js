import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userConfirmPlans = createAsyncThunk(
    'CONFIRM_PLANS',
    async (_, thunkAPI) => {
        try {
            const { user } = thunkAPI.getState();
            const token = user.token;
            const res = await axios.get(`http://localhost:3001/api/events/confirm`, {
                headers: { authorization: `Bearer ${token}` },
            });
            return res.data;
        } catch (err) {
            console.error(err);
        }
    },
);

const userConfirmEventsReducer = createReducer(
    [],
    {
        [userConfirmPlans.fulfilled]: (state, action) => action.payload,
    },
);

export default userConfirmEventsReducer;