// src/redux/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the auth slice
interface AuthState {
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null, // The token will be stored here
  error: null, // Any errors related to authentication
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the token
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    // Action to clear the token (e.g., for logout)
    clearToken: (state) => {
      state.token = null;
      state.error = null;
    },
    // Action to set any error message
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Export the actions so they can be dispatched
export const { setToken, clearToken, setError } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
