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

//entire state of redux store
// returns type of getState function (i.e. CinemaState)
// reference RootState anywhere to access full store state
export type RootState = ReturnType<typeof store.getState>;

// used to dispatch actions in store
// for thunk actions (fetchCinemas), handle regular actions
// and async actions (thunks)
export type AppDispatch = typeof store.dispatch;

export default store;