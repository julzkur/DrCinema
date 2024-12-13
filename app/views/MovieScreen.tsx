import React from "react";
import { View } from "react-native";
import MovieScreen from "../components/MovieScreen";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

export const MovieScreenDisplay = ({ navigation, route }: any) => {

  const { movie, cinema } = route.params;

  return (
    <View style={styles.cinemasListContainer}>
      <ScrollView contentContainerStyle={styles.cinemaDScrollContainer}>
        <Header navigation={navigation} showBackButton={true} />
        <MovieScreen movie={movie}  navigation={navigation} cinema={cinema}/>
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default MovieScreenDisplay;