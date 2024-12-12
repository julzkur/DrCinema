import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import AxiosAPI from './axiosAPI';
import axios from 'axios';
import UpcomingModel from '../models/upcoming';

const api = new AxiosAPI('https://api.kvikmyndir.is');

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
      const data = await api.fetchData('/upcoming');
      console.log(data);

      const upcomingMovies = data.flatMap((movie: any) => {

        const movieModel = new UpcomingModel(
          movie.id,
          movie.title,
          movie.year,
          movie.poster,
        );

        return movieModel.toObject();
      });

      console.log(upcomingMovies)

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
        state.upcomingMovies = action.payload;  // Store the fetched movies
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
