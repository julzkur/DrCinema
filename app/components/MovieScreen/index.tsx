import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import PurchaseButton from "../PurchaseTicketButton";
import MovieModel, { Genre } from "@/app/models/movie";
import CinemaModel from "@/app/models/cinema";

const MovieScreen = ({ movie, cinema }: { movie: MovieModel, cinema: CinemaModel}) => {


  const genres = movie.genres?.length > 0 ? movie.genres.map((genre: Genre) => 
    genre.NameEN).join(', ') : 'No genres available';

  const showtimesForCinema = movie.showtimes
  .flatMap((showtime) => 
    showtime.schedule.filter((schedule) => showtime.cinema_name === cinema.name)
  );

  // console.log(showtimesForCinema)

  
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
        <Text style={styles.address}>Útgáfuár: {movie.year}</Text>
      </View>


      <View style={styles.phoneAndAddressContainer}>
        <Image
          source={require("../../resources/whiteClock.png")}
          style={styles.phoneAndAddressImage}
        />
        <Text style={styles.phone}>Lengd: {movie.durationMinutes} mín</Text>
      </View>

      {/* Genres */}
      
      <View style={styles.genreContainer}>
        <Text style={styles.phone}>Tegundir: {genres}</Text>
      </View>

      <View style={styles.showtimeContainer}>
  <Text style={styles.showtimeHeader}>Sýningar</Text>

  <View>
    {showtimesForCinema.map((item) => (
      <View key={item.time} style={styles.showtimeRow}>
        <Text style={styles.showtimeText}>
          {item.time} - {item.info}
        </Text>
        <PurchaseButton url={item.purchase_url} />
      </View>
    ))}
  </View>
</View>


    </View>
  );
};

export default MovieScreen;
