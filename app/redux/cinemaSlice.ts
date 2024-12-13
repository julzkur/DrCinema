import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { createAxiosAPI } from './axiosAPI';
import { CinemaModel } from '../models/cinema';
import axios from 'axios';




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
    const api = await createAxiosAPI('https://api.kvikmyndir.is/');
    const data = await api.fetchData('/theaters'); 
    console.log(data.phone);
    
    const cinemas = data.map((cinema: any) => ({
      id: cinema.id,
      name: cinema.name,
      address: cinema['address\t'] || 'Address not available', // Fixing the extra tab character
      city: cinema.city || 'City not available',
      phone: cinema.phone || 'Phone not available',
      website: cinema.website || 'Website not available',
      description: (cinema.description || '')
    .replace(/<br\s*\/?>/g, '\n') // Replace <br> tags with line breaks
    .replace(/<\/?b>/g, ''),
      googleMap: cinema.google_map || 'No Google Map link available',
    }));


    

    return cinemas; // return cinemas
  } catch (error) {
    console.error('Error while fetching cinemas:', error); // Add this
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
