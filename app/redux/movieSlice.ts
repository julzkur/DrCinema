import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import AxiosAPI from './axiosAPI';
import { MovieModel } from '../models/movie';  
import axios from 'axios';
import CinemaModel from '../models/cinema';

const api = new AxiosAPI('https://api.kvikmyndir.is');

interface Showtime {
  time: string;
  purchase_url: string;
  info: string;
  cinema: {
    id: string;
    name: string;
  };
}

interface Movie {
  id: string;
  title: string;
  year: string;
  genres: string[];
  thumbnailphoto: string;
  showtimes: Showtime[];
}

interface MoviesState {
  movies: MovieModel[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const useMovies = (cinema: CinemaModel) => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (!loading && movies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, loading, movies.length]);

  const filteredMovies = movies.filter((movie) =>
    movie.showtimes.some((showtime) => showtime.cinema_name === cinema.name)
  );

  return { movies: filteredMovies, loading, error };
};

// Async thunk to fetch movies from the API
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.fetchData('/movies');

      const movies = data.flatMap((movie: any) => {
        const genres = movie.genres.map((genre: any) => ({
            ID: genre.ID,
            Name: genre.Name,
            NameEN: genre.NameEN || genre.Name // handle missing English names
        }));

        const movieModel = new MovieModel(
          movie.id,
          movie.title,
          movie.year,
          genres,
          movie.thumbnailphoto,
          movie.poster,
          movie.plot,
          movie.durationMinutes.toString(),
          movie.showtimes.map((showtime: any) => ({
            cinema_name: showtime.cinema.name,
            schedule: showtime.schedule.map((schedule: any) => ({
              time: schedule.time,
              purchase_url: schedule.purchase_url,
              info: schedule.info,
            })),
          }))
        );

        return movieModel.toObject();
      });

      return movies; 

    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || error.message || 'Unknown API error');
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;  // Store the fetched movies
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load movies';
      });
  },
});

export default movieSlice.reducer;
export const selectMovies = (state: any) => state.movies.movies;
export const selectMoviesLoading = (state: any) => state.movies.loading;
export const selectMoviesError = (state: any) => state.movies.error;
