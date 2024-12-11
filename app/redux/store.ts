import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cinemaReducer from "./cinemaSlice";
import movieReducer from "./movieSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cinemas: cinemaReducer,
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;