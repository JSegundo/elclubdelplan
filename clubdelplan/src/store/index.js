import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import userSlice from "./user"

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user:userSlice
  },
})