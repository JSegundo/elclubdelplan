import {createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllUsers = createAsyncThunk(
  'GET_ALL_USERS',
  async (_, thunkAPI) => {
    const {user} = thunkAPI.getState();
    const token = user.token;
    try {
      let res = await axios.get('http://localhost:3001/api/users', {
        headers: {authorization: `Bearer ${token}`},
      });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

const allUsersReducer = createReducer(
  {},
  {
    [getAllUsers.fulfilled]: (state, action) => action.payload,
  },
);

export default allUsersReducer;
