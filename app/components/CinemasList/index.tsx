import React from "react";
import { View, Text, FlatList } from "react-native";
import { useCinemas } from '@/app/redux/cinemaSlice';
import CinemaCard from "../CinemaCard";
import styles from "./styles";
import UpcomingMovieButton from "../UpcomingMoviesButton";


const CinemasList= ({ navigation}: any) => {

  const { cinemas, loading, error } = useCinemas();

  if (loading) {
    // maybe add component for loading screen
    return <Text>Loading cinemas...</Text>;
  }

    // error screen component?
  if (error) {
    console.error('Error fetching cinemas:', error);
    const errorMessage = typeof error === 'string' ? error : error || 'An error occurred.';
    return <Text>{errorMessage}</Text>;
  }

  return (
      <View style={styles.container}>
        <View style={styles.UpcomingMoviesContainer}>
          <Text style={styles.title}>Cinemas</Text>
          <UpcomingMovieButton navigation={navigation} />
        </View>
          <FlatList
            data={cinemas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <CinemaCard cinema={item} navigation={navigation} />
            }}
        />
      </View>
  );
};

export default CinemasList;