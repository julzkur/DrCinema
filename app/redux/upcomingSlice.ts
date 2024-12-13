import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import {createAxiosAPI} from './axiosAPI';
import axios from 'axios';
import UpcomingModel from '../models/upcoming';

interface upcomingMoviesState {
  upcomingMovies: UpcomingModel[];
  loading: boolean;
  error: string | null;
}

const initialState: upcomingMoviesState = {
  upcomingMovies: [],
  loading: false,
  error: null,
};

export const useUpcomingMovies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { upcomingMovies, loading, error } = useSelector((state: RootState) => state.upcomingMovies);

  useEffect(() => {
    if (!loading && upcomingMovies.length === 0) {
      dispatch(fetchUpcomingMovies());
    }
  }, [dispatch, loading, upcomingMovies.length]);

  return { upcomingMovies, loading, error };
};

// Async thunk to fetch movies from the API
export const fetchUpcomingMovies = createAsyncThunk(
  'upcoming/fetchUpcomingMovies',
  async (_, { rejectWithValue }) => {
    try {
      const api = await createAxiosAPI('https://api.kvikmyndir.is/');
      const data = await api.fetchData('/upcoming');

      const upcomingMovies = data.flatMap((movie: any) => {
        
        const movieModel = new UpcomingModel(
          movie.id,
          movie.title,
          movie.year,
          movie.poster,
          movie['release-dateIS']
        );

        return movieModel.toObject();
      });

      return upcomingMovies; 

    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || error.message || 'Unknown API error');
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

const upcomingMovieSlice = createSlice({
  name: 'upcomingMovies',
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.upcomingMovies = action.payload; 
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load movies';
      });
  },
});

export default upcomingMovieSlice.reducer;
export const selectMovies = (state: any) => state.upcomingMovies.movies;
export const selectMoviesLoading = (state: any) => state.upcomingMovies.loading;
export const selectMoviesError = (state: any) => state.upcomingMovies.error;
