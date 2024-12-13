import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import PurchaseButton from "../PurchaseTicketButton";
import MovieModel, { Genre } from "@/app/models/movie";
import CinemaModel from "@/app/models/cinema";

const MovieScreen = ({ navigation, movie, cinema }: { navigation: any, movie: MovieModel, cinema: CinemaModel}) => {


  const genres = movie.genres?.length > 0 ? movie.genres.map((genre: Genre) => 
    genre.NameEN).join(', ') : 'No genres available';

  const showtimeForCinema = movie.showtimes.find((showtime) => 
    showtime.cinema_name === cinema.name
  );

  const purchaseUrl = showtimeForCinema?.schedule?.[0]?.purchase_url || null;
  
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
          <View style={styles.buttonContainer}>
            <PurchaseButton url={purchaseUrl} navigation={navigation}/>
          </View>
      </View>
    </View>
  );
};

export default MovieScreen;
