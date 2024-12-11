import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import TrailerScreen from "../TrailerScreen";

const UpcomingMovieCard = ({ navigation, movie }: { navigation: any, movie: any }) => {

  const handlePress = () => {
    navigation.navigate(TrailerScreen);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.thumbnailContainer} >
        <Image source={{uri: movie.poster}} style={styles.thumbnail} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{movie.title || 'Unnamed Movie'}</Text>
      </View>
      <View style={styles.releaseDateContainer}>
        <Text style={styles.ReleaseDate}>{movie.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingMovieCard