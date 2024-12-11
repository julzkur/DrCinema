import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import AxiosAPI from './axiosAPI';
import { CinemaModel } from '../models/cinema';
import axios from 'axios';

const api = new AxiosAPI('https://api.kvikmyndir.is');


interface CinemaState {
  cinemas: CinemaModel[];
  loading: boolean;
  error: string | null;
}

const initialState: CinemaState = {
  cinemas: [],
  loading: false,
  error: null,
};

export const useCinemas = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cinemas, loading, error } = useSelector((state: RootState) => state.cinemas);

  useEffect(() => {
    dispatch(fetchCinemas());
  }, [dispatch]);

  return { cinemas, loading, error };
};

// Fetch cinemas from the API
export const fetchCinemas = createAsyncThunk('cinemas/fetchCinemas', async (_, { rejectWithValue }) => {
  try {
    const data = await api.fetchData('/movies');

    // Extract and map cinemas with necessary checks
    const cinemas = data.flatMap((movie: any) =>
      movie.showtimes.map((showtime: any) => {
        const cinema = showtime.cinema;

        // handle invalid IDs
        if (!cinema?.id || !cinema?.name) {
          console.warn('Skipping cinema with invalid data:', cinema);
          return null;
        }

        return {
          id: cinema.id,
          name: cinema.name,
          phoneNumber: cinema.phoneNumber || '+354 888 1234', // Default phone number
          address: cinema.address || '123 Paved Street, FantasyLand', // Default address
          website: cinema.website || 'https://google.com', // Default website
          description:
            cinema.description ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam eveniet, quisquam neque cum totam provident ea earum quasi aut hic esse officia. Sed qui quia ratione mollitia iusto commodi.',
        };
      })
    ).filter((cinema: any) => cinema !== null); // Remove null entries

    // only fetch cinemas with unique IDs
    const uniqueCinemas = Array.from(new Set(cinemas.map((cinema: any) => cinema.id)))
      .map((id) => cinemas.find((cinema: any) => cinema.id === id));

    console.log('Mapped and Unique Cinemas:', uniqueCinemas);

    return uniqueCinemas; // return cinemas
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || error.message || 'Unknown API error');
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

  

const cinemaSlice = createSlice({
  name: 'cinemas',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCinemas.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCinemas.fulfilled, (state, action) => {
        state.loading = false;
        state.cinemas = action.payload;  
        console.log('Cinemas in Redux State:', state.cinemas);
      })
      
      .addCase(fetchCinemas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load cinemas';
      });
  },
});

export default cinemaSlice.reducer;
