import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieModel } from '../models/movie';  
import { createAxiosAPI } from './axiosAPI';



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
  name: string;
  year: string;
  genres: string[];
  thumbnailphoto: string;
  showtimes: Showtime[];
}

interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

// Async thunk to fetch movies from the API
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (token: string, { rejectWithValue }) => {
    try {
      const api = await createAxiosAPI('https://api.kvikmyndir.is/');
      const data = await api.fetchData('/movies'); 

      const movies = data.map((movie: any) => {
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
      return rejectWithValue(error);
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
        state.error = action.payload as string;
      });
  },
});

export default movieSlice.reducer;
export const selectMovies = (state: any) => state.movies.movies;
export const selectMoviesLoading = (state: any) => state.movies.loading;
export const selectMoviesError = (state: any) => state.movies.error;
