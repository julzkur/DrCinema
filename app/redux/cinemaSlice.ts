import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CinemaModel } from '../models/cinema';

const API_URL = 'https://api.kvikmyndir.is/movies';

interface Showtime {
  time: string;
  purchase_url: string;
  info: string;
}

interface Cinema {
  id: string;
  name: string;
  showtimes: Showtime[];
}

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

// Fetch cinemas from the API
export const fetchCinemas = createAsyncThunk('cinemas/fetchCinemas', async (token: string, { rejectWithValue }) => {
    try {
        const response = await fetch("https://api.kvikmyndir.is/movies", {
          method: "GET",
          headers: {
            "x-access-token": `${token}`,
            "Accept": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch cinemas");
        }
  
        const data = await response.json();

        const cinemas = data.flatMap((movie: any) =>
          movie.showtimes.map((showtime: any) => {
            const cinema = showtime.cinema;
  
            // Skip cinemas with undefined or invalid IDs
            if (!cinema.id || !cinema.name) {
              console.warn('Skipping cinema with invalid data:', cinema);
              return null; 
            }
                
            const cinemaModel = new CinemaModel(
              cinema.id,
              cinema.name,
              cinema.phoneNumber || "+354 888 1234", // Fallback phone number
              cinema.address || "123 Paved Street, FantasyLand", 
              cinema.website || "https://google.com", // Fallback website
              cinema.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam eveniet, quisquam neque cum totam provident ea earum quasi aut hic esse officia. Sed qui quia ratione mollitia iusto commodi.", 
            );
            return cinemaModel.toObject();
          })
        ).filter((cinema: any) => cinema !== null);

        const uniqueCinemas = Array.from(new Set(cinemas.map((cinema: any) => cinema.id)))
        .map(id => cinemas.find((cinema: any) => cinema.id === id));

        console.log('Mapped and Unique Cinemas:', uniqueCinemas);

        return uniqueCinemas; // Return the fetched data to be added to the state
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

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
        state.cinemas = action.payload;  // Assuming API returns an array of movies with showtimes
        console.log('Cinemas in Redux State:', state.cinemas);
      })
      
      .addCase(fetchCinemas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load cinemas';
      });
  },
});

export default cinemaSlice.reducer;
