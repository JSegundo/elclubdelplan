import {createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getEvent = createAsyncThunk('EVENT', async (eventId) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/events/${eventId}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  });

  const singleEventReducer = createReducer(
    {},
    {
      [getEvent.fulfilled]: (state, action) => action.payload,
    },
  );
  
  export default singleEventReducer;