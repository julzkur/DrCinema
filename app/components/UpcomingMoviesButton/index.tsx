import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const UpcomingMovieButton = ({ navigation }: { navigation: any; }) => {
  
  const handlePress = () => {
    navigation.navigate("UpcomingMovies");
  };
  
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Upcoming movies</Text>
    </TouchableOpacity>
  );
};

export default UpcomingMovieButton