import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import MovieModel, { Genre } from "@/app/models/movie";
import styles from "./styles";
import CinemaModel from "@/app/models/cinema";

const MovieCard = ({ navigation, movie, cinema }: { navigation: any, movie: MovieModel, cinema: CinemaModel }) => {

  const handlePress = () => {
    navigation.navigate('MovieScreen', { movie, cinema});
  };
  
  const genres = movie.genres?.length > 0 ? movie.genres.map((genre: Genre) => genre.NameEN).join(', ') : 'No genres available';

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer} >
        <Image source={{uri: movie.poster}} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{movie.title || 'Unnamed Movie'}</Text>
      </View>
      <View style={styles.releaseYearContainer}>
        <Text style={styles.releseYear}>{movie.year}</Text>
      </View>
      <View style={styles.genresContainer}>
        <Text style={styles.genres} numberOfLines={1} ellipsizeMode="tail">{genres}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard