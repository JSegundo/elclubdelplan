import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllComents = createAsyncThunk('COMENTS', async (eventId) => {
    try {
        const res = await axios.get(`http://localhost:3001/api/coments/${eventId}`);
        return res.data;
    } catch (err) {
        console.error(err);
    }
});

export const createComent = createAsyncThunk('CREATE_COMENT', async (newComent, thunkAPI) => {
    const { user } = thunkAPI.getState();
    const userid = user._id;
    const token = user.token;
    try {
        const res = await axios.post(
            `http://localhost:3001/api/coments/${userid}`,
            newComent,
            {
                headers: { authorization: `Bearer ${token}` },
            },
        );
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
},
);

const comentReducer = createReducer({},
    {
        [createComent.fulfilled]: (state, action) => action.payload,
        [getAllComents.fulfilled]: (state, action) => action.payload,
    },
);

export default comentReducer;