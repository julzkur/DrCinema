import React from "react";
import { View } from "react-native";
import UpcomingMoviesList from "../components/UpcomingMoviesList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./styles";

export const UpcomingMoviesView = ({ navigation }: any) => {
  return (
    <View style={styles.cinemasListContainer}>
      <Header showBackButton={true} navigation={navigation} />
      <UpcomingMoviesList navigation={navigation} />
      <Footer navigation={navigation}/>
    </View>
  );
};

export default UpcomingMoviesView;