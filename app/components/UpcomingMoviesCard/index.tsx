import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import TrailerScreen from "../TrailerScreen";
import UpcomingModel from "@/app/models/upcoming";

const UpcomingMovieCard = ({ navigation, movie }: { navigation: any, movie: UpcomingModel }) => {

  const handlePress = () => {
    navigation.navigate("TrailerScreen");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
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
        <Text style={styles.ReleaseDate}>{formatDate(movie.date)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingMovieCard