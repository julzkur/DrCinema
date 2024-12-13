import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { fetchMovies, selectMovies, selectMoviesLoading, selectMoviesError } from '@/app/redux/movieSlice';
import styles from "./styles";
import MovieCard from "../MovieCard";
import MovieModel from "@/app/models/movie";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/store";

const MoviesList = ({ navigation, cinema }: { navigation: any; cinema: any }) => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectMoviesLoading);
  const error = useSelector(selectMoviesError);

  useEffect(() => {
    if (loading === false && movies.length === 0) {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3NTZlZjQzYWE2MjRlOTNlZTkyNDlhMiIsImlhdCI6MTczMzg3NDI1MCwiZXhwIjoxNzMzOTYwNjUwfQ.w7DNbCJ1ox41HfUHWhTLixBj8xlrDjSlPmYCQGfjVik'; // Use your token
      dispatch(fetchMovies());
    }
  }, [dispatch, loading, movies.length]);

  const filteredMovies = movies.filter((movie: MovieModel) =>
    movie.showtimes.some((showtime) => showtime.cinema_name === cinema.name) 
  );

  return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Movies shown in this cinema</Text>
        </View>
        <View style={styles.cardContainer}>
          {filteredMovies.map((item: MovieModel) => (
          <View style={styles.cardWrapper} key={item.id}>
            <MovieCard movie={item} navigation={navigation} />
          </View>
          ))}
        </View>
      </View>
  );
};

export default MoviesList;