import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const MovieCard = ({ navigation, thumbnailphoto, name, releaseYear }: { navigation: any, thumbnailphoto: undefined, name: string, releaseYear: number }) => {

  const handlePress = () => {
    navigation.navigate();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer} >
        <Image source={thumbnailphoto} style={styles.image} />
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.releaseYearContainer}>
        <Text style={styles.releseYear}>{releaseYear}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard