import React from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import styles from "./styles";
import UpcomingMoviesView from "@/app/views/UpcomingMovies";

const UpcomingMovieButton = ({ navigation }: { navigation: any; }) => {
  
  const handlePress = () => {
    navigation.navigate(UpcomingMoviesView);
  };
  
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Upcoming movies</Text>
    </TouchableOpacity>
  );
};

export default UpcomingMovieButton