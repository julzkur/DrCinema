import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type Genre = {
  ID: number;
  Name: string;
  NameEN: string;
};

const MovieCard = ({ navigation, movie }: { navigation: any, movie: any }) => {

  const handlePress = () => {
    //navigation.navigate();
  };
  

  const genres = movie.genres?.length > 0 ? movie.genres.map((genre: Genre) => genre.NameEN).join(', ') : 'No genres available';
  console.log(movie.genres);
  console.log(movie.poster);
  console.log(movie.year);

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