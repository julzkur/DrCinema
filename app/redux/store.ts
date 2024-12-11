import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { movieSlice } from "./features/moviesSlice";

const store = configureStore({
    reducer: {
      movies: movieSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export default store;