import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import PurchaseButton from "../PurchaseTicketButton";
import MovieModel, { Genre } from "@/app/models/movie";

const MovieScreen = ({ navigation, movie }: { navigation: any, movie: MovieModel}) => {

  const genres = movie.genres?.length > 0 ? movie.genres.map((genre: Genre) => genre.NameEN).join(', ') : 'No genres available';
  console.log(movie)
  
  return (
    <View style={styles.container}>
      {/* Movie Poster */}
      <View style={styles.imagecontainer}>
        <Image
          source={{uri: movie.poster}}
          style={styles.image}
        />
      </View>

      {/* Movie Name */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{movie.title}</Text>
      </View>

      {/* Movie Plot */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          {movie.plot}
        </Text>
      </View>

      <View style={styles.phoneAndAddressContainer}>
        <Image
          source={require("../../resources/calenderWhite2.png")}
          style={styles.phoneAndAddressImage}
        />
        <Text style={styles.address}>Year of release: {movie.year}</Text>
      </View>


      <View style={styles.phoneAndAddressContainer}>
        <Image
          source={require("../../resources/whiteClock.png")}
          style={styles.phoneAndAddressImage}
        />
        <Text style={styles.phone}>Duration: {movie.durationMinutes} minutes</Text>
      </View>

      {/* Genres */}
      
      <View style={styles.genreContainer}>
        <Text style={styles.phone}>Genres: {genres}</Text>
      </View>

      {/* Purchase Ticket Button */}
      <View style={styles.buttonContainer}>
        <PurchaseButton url={""} navigation={navigation} />
      </View>
    </View>
  );
};

export default MovieScreen;
