import {createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getOwnerPastEvents = createAsyncThunk(
  'OWNER_EVENTS',
  async (ownerid, thunkAPI) => {
    console.log(ownerid);
    try {
      const res = await axios.get(
        `http://localhost:3001/api/events/done/${ownerid}`,
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);
const ownerEventsReducer = createReducer(
  {},
  {
    [getOwnerPastEvents.fulfilled]: (state, action) => action.payload,
  },
);

export default ownerEventsReducer;
