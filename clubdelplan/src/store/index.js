import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './user';
import eventsReducer from './event';
import userEventsReducer from './userEvents';

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    userEvents: userEventsReducer,
    event: eventsReducer,
  },
});
