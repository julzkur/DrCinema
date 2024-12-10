import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const MovieCard = ({ navigation, movie }: { navigation: any, movie: any }) => {

  const handlePress = () => {
    navigation.navigate();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer} >
        <Image source={movie.thumbnailphoto} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{movie.name}</Text>
      </View>
      <View style={styles.releaseYearContainer}>
        <Text style={styles.releseYear}>{movie.releaseYear}</Text>
      </View>
      <View style={styles.genresContainer}>
        <Text style={styles.genres}>{movie.genres}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard