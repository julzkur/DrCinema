import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "@/app/redux/store";
import UpcomingMovieCard from "../UpcomingMoviesCard";
import styles from "./styles";
import { fetchMovies } from "@/app/redux/movieSlice"; //Need to change to upcoming movies
import movie from "@/app/models/movie"; //Need to change to upcoming movies


const UpcomingMoviesList : React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);
  const token = "edeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3NTZlZjQzYWE2MjRlOTNlZTkyNDlhMiIsImlhdCI6MTczMzg3NDI1MCwiZXhwIjoxNzMzOTYwNjUwfQ.w7DNbCJ1ox41HfUHWhTLixBj8xlrDjSlPmYCQGfjVik";  // Hardcode the token here
  console.log('Movies from Redux:', movies); // Need to change to upcoming movies

  useEffect(() => {
    console.log('Token:', token);
    if (token) {
      dispatch(fetchMovies(token)); // Pass token to the fetchCinemas action  need to change ot upcoming movies
    }
  }, [dispatch, token]);

  if (loading) {
    return <Text>Loading movies...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Movies</Text>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              console.log('Rendering MovieCard for:', item);
              return <UpcomingMovieCard navigation={navigation} movie={movie} /> // Need to change to upcoming movie
            }}
        />
      </View>
  );
};

export default UpcomingMoviesList;