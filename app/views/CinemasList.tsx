import React from "react";
import CinemasList from "../components/CinemasList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

export const CinemasListView = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.cinemasListContainer}>
      <Header showBackButton={false} navigation={navigation} />
      <CinemasList navigation={navigation} />
      <Footer navigation={navigation}/>
    </ScrollView>
  );
};

export default CinemasListView;


