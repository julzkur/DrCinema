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

  const sortedMovies = [...upcomingMovies].sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Movies</Text>
          <FlatList
            data={sortedMovies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <UpcomingMovieCard navigation={navigation} movie={item} />
            }}
        />
      </View>
  );
};

export default UpcomingMoviesList;