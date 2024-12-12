import React from "react";
import { View, Text } from "react-native";
import { useMovies } from '@/app/redux/movieSlice';
import styles from "./styles";
import MovieCard from "../MovieCard";
import MovieModel from "@/app/models/movie";

const MoviesList = ({ navigation, cinema }: { navigation: any; cinema: any }) => {
  const { movies, loading, error } = useMovies(cinema);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error loading movies: {error}</Text>
      </View>
    );
  }

  return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Movies shown in this cinema</Text>
        </View>
        <View style={styles.cardContainer}>
          {movies.map((item: MovieModel) => (
          <View style={styles.cardWrapper} key={item.id}>
            <MovieCard movie={item} navigation={navigation} />
          </View>
          ))}
        </View>
      </View>
  );
};

export default MoviesList;