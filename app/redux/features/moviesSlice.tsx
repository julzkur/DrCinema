import { createSlice } from "@reduxjs/toolkit";
import AxiosAPI from "./axiosAPI";
import { AppDispatch } from "../store";

const apiService = new AxiosAPI('https://api.kvikmyndir.is/');

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
      const response = await apiService.get(); // "/movies/"
      dispatch(getAllMovies(response.data));

    }
    catch (err){
      // dispatch(getMoviesErr(err));
    }
  }
}

export const getMovieById = (id:string) => {
  return async (dispatch:AppDispatch) => {
    try {
      // loading ?
      const response = await apiService.fetchData("/movies/")// change this to movie by id lookup "/movies/"
      console.log(response.data);
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