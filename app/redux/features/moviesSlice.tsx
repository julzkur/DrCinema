import { createSlice } from "@reduxjs/toolkit";
import { createAxiosAPI } from "./axiosAPI";
import { AppDispatch } from "../store";



export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    selectedMovie: {},
  },
  reducers: {
    getAllMovies: (state, action) => {
      const { movies } = action.payload;

      // Update state variables based on action payload
      state.movies = movies;
    },
    selectMovie: (state, action) => {
      const { movie } = action.payload;

      state.selectedMovie = movie;
    }
  },
});

const {
  getAllMovies,
  selectMovie,
} = movieSlice.actions


export const getMovies = () => {
  return async (dispatch:any) => {
    try {
      // dispatch(getMoviesLoading())
      const apiService = await createAxiosAPI('https://api.kvikmyndir.is/');
      const response = await apiService.fetchData("/movies/"); // "/movies/"
      dispatch(getAllMovies(response.data));

    }
    catch (err){
      // dispatch(getMoviesErr(err));
    }
  }
}

export const getMovieByTitle = (id:string) => {
  return async (dispatch:AppDispatch) => {
    try {
      // loading ?
      const apiService = await createAxiosAPI('https://api.kvikmyndir.is/');
      const response = await apiService.fetchData(`/movies/`)// change this to movie by id lookup "/movies/"
      console.log(response);
      dispatch(selectMovie(response.data));
    }
    catch (err){

    }
  }
}


export const getMoviesByCinemaId = (cinemaId:number) => {
  return (dispatch:any, getState:any) => {
    const state = getState();
    const movies = state.movies.movies;
    
    if (movies.length === 0){
      dispatch(getMovies());
    }
    const filteredMovies = movies.filter((movie:any) => {
      return movie.showtimes.some((showtime:any) => showtime.cinema.id === cinemaId)
    })
  }
}