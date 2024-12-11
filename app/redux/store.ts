import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { movieSlice } from "./features/moviesSlice";

const store = configureStore({
    reducer: {
      movies: movieSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: {
            extraArgument: {}, // Optional: Add any extra arguments for thunk if needed.
          },
        }),
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export default store;