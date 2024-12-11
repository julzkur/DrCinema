import React from "react";
import { View, Text } from "react-native";
import CinemaDetail from "../components/CinemaDetail";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";
import MoviesList from "../components/MoviesList";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

export const CinemasDetailView = ({ navigation, route }: any) => {
  const { cinema } = route.params;

  if (!cinema) {
    return (
      <View>
        <Text style={{ color: 'white', fontSize: 16 }}>No cinema found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.cinemaDetailContainer}>
      <ScrollView contentContainerStyle={styles.cinemaDScrollContainer}>
        <Header navigation={navigation} showBackButton={true} />
        <CinemaDetail cinema={cinema} navigation={navigation} />
        <MoviesList navigation={navigation} cinema={cinema} />
        <Footer navigation={navigation} />
      </ScrollView>
    </ScrollView>
  );
};

export default CinemasDetailView;