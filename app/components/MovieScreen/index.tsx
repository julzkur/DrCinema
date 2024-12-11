import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const MovieScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Movie Poster */}
      <View style={styles.imagecontainer}>
        <Image
          source={require("../../resources/interstellar.jpeg")}
          style={styles.image}
        />
      </View>

      {/* Movie Name */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Movie Name</Text>
      </View>

      {/* Movie Plot */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          laboriosam eveniet, quisquam neque cum totam provident ea earum quasi
          aut hic esse officia. Sed qui quia ratione mollitia iusto commodi.
        </Text>
      </View>

      {/* Movie Duration */}
      <View style={styles.phoneAndAddressContainer}>
        <Image
          source={require("../../resources/calenderWhite2.png")}
          style={styles.phoneAndAddressImage}
        />
        <Text style={styles.address}>Year of release: 2001</Text>
      </View>

      {/* Year of Release */}
      <View style={styles.phoneAndAddressContainer}>
        <Image
          source={require("../../resources/whiteClock.png")}
          style={styles.phoneAndAddressImage}
        />
        <Text style={styles.phone}>Duration Year: 169 minutes</Text>
      </View>

      {/* Genres */}
      <View style={styles.genreContainer}>
        <Text style={styles.phone}>Genre: Action</Text>
      </View>

    </View>
  );
};

export default MovieScreen;
