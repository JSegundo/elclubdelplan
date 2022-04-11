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

  export const addGuest = createAsyncThunk('ADD_GUEST', async (eventId, thunkAPI) => {
      const {user} = thunkAPI.getState();
      const token = user.token;
      try {
        const res = await axios.put(`http://localhost:3001/api/events/addGuest/${eventId}`, //REVISAR RUTA
          user,
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

  const singleEventReducer = createReducer(
    {},
    {
      [getEvent.fulfilled]: (state, action) => action.payload,
      [addGuest.fulfilled]: (state, action) => action.payload,
    },
  );
  
  export default singleEventReducer;