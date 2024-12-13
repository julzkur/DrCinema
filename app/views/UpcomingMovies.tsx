import React from "react";
import { View, ScrollView } from "react-native";
import UpcomingMoviesList from "../components/UpcomingMoviesList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./styles";

export const UpcomingMoviesView = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.cinemasListContainer}>
      <Header showBackButton={true} navigation={navigation} />
      <UpcomingMoviesList navigation={navigation} />
      <Footer navigation={navigation}/>
    </ScrollView>
  );
};

export default UpcomingMoviesView;