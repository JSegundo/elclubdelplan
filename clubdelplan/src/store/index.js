import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import userReducer from "./user"
import eventsReducer from "./event"

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user:userReducer,
    event: eventsReducer,    
  },
})