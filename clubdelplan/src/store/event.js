import {createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllEvents = createAsyncThunk('events', () => {
  return axios.get('/api/event').then(res => res.data);
});


const eventsReducer = createReducer({},{
    [getAllEvents.fulfilled]: (state, action) => action.payload,
  },
);

export default eventsReducer;