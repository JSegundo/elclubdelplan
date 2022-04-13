import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './user/user';
import eventsReducer from './event';
import userEventsReducer from './user/userEvents';
import comentReducer from './coment';
import singleEventReducer from './singleEvent';
import allUsersReducer from './user/allUsers';
import ownerEventsReducer from './user/ownerPastEvents';
import userConfirmEventsReducer from "./user/userConfirmEvents"

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    userEvents: userEventsReducer,
    event: eventsReducer,
    singleEvent: singleEventReducer,
    coment: comentReducer,
    allUsers: allUsersReducer,
    ownerPastEvents: ownerEventsReducer,
    confirmEvents: userConfirmEventsReducer
  },
});
