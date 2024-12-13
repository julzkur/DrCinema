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
        <Text style={styles.title}>Væntanlegar Myndir</Text>
        <View style={styles.cardContainer}>
          {sortedMovies.map((item) => (
            <UpcomingMovieCard key={item.id} navigation={navigation} movie={item} />
          ))}
        </View>
      </View>
  );
};

export default UpcomingMoviesList;