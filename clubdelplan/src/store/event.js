import {createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllEvents = createAsyncThunk('events', async () => {
  try {
    const res = await axios.get('http://localhost:3001/api/events');
    return res.data;
  } catch (err) {
    console.error(err);
  }
});

export const getEvent = createAsyncThunk('EVENT', async (eventId) => {
  try {
    const res = await axios.get(`http://localhost:3001/api/events/${eventId}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
});

export const createEvent = createAsyncThunk(
  'CREATE_EVENT',
  async (newEvent, thunkAPI) => {
    const {user} = thunkAPI.getState();
    const userid = user._id;
    const token = user.token;
    try {
      const res = await axios.post(
        `http://localhost:3001/api/events/add/${userid}`,
        newEvent,
        {
          headers: {authorization: `Bearer ${token}`},
        },
      );
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
);

const eventsReducer = createReducer(
  {},
  {
    [getAllEvents.fulfilled]: (state, action) => action.payload,
    [createEvent.fulfilled]: (state, action) => action.payload,
  },
);

export default eventsReducer;
