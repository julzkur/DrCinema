import React from "react";
import { View, Text, FlatList } from "react-native";
import UpcomingMovieCard from "../UpcomingMoviesCard";
import styles from "./styles";
import { useUpcomingMovies } from "@/app/redux/upcomingSlice";


const UpcomingMoviesList = ({ navigation }: { navigation: any}) => {
  const { upcomingMovies, loading, error} = useUpcomingMovies();
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
        <Text style={styles.title}>Movies</Text>
          <FlatList
            data={upcomingMovies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <UpcomingMovieCard navigation={navigation} movie={item} />
            }}
        />
      </View>
  );
};

export default UpcomingMoviesList;