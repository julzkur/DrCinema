import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import TrailerScreen from "../TrailerScreen";
import UpcomingModel from "@/app/models/upcoming";
import TrailerButton from "../TrailerButton";

const UpcomingMovieCard = ({ navigation, movie }: { navigation: any, movie: UpcomingModel }) => {

  // const handlePress = () => {
  //   navigation.navigate("TrailerScreen");
  // };

  let firstTrailerKey = movie.trailers.find((trailer: any) =>
    trailer.results && trailer.results.length > 0 
  )?.results[0]?.key;
  
  if (firstTrailerKey === undefined){
    firstTrailerKey = "No trailer found";
  }
  

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.thumbnailContainer} >
        <Image source={{uri: movie.poster}} style={styles.thumbnail} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {movie.title || 'Unnamed Movie'}
        </Text>
        <Text style={styles.ReleaseDate}>{formatDate(movie.date)}</Text>
        <TrailerButton navigation={navigation} trailerId={firstTrailerKey} />
      </View>
    </View>

  );
};

export default UpcomingMovieCard