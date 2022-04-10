import {createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const userOwnPlans = createAsyncThunk(
  'OWN_PLANS',
  async (_, thunkAPI) => {
    try {
      const {user} = thunkAPI.getState();
      const token = user.token;
      const res = await axios.get(`http://localhost:3001/api/events/me`, {
        headers: {authorization: `Bearer ${token}`},
      });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const userDonePlans = createAsyncThunk(
  'DONE_PLANS',
  async (_, thunkAPI) => {
    try {
      const {user} = thunkAPI.getState();
      const token = user.token;
      const res = await axios.get(`http://localhost:3001/api/events/done`, {
        headers: {authorization: `Bearer ${token}`},
      });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const userAttendPlans = createAsyncThunk(
  'ATTEND_PLANS',
  async (_, thunkAPI) => {
    try {
      const {user} = thunkAPI.getState();
      const token = user.token;
      const res = await axios.get(`http://localhost:3001/api/events/attend`, {
        headers: {authorization: `Bearer ${token}`},
      });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

const userEventsReducer = createReducer(
  {},
  {
    [userOwnPlans.fulfilled]: (state, action) => action.payload,
    [userDonePlans.fulfilled]: (state, action) => action.payload,
    [userAttendPlans.fulfilled]: (state, action) => action.payload,
  },
);

export default userEventsReducer;
