import React from "react";
import { View } from "react-native";
import CinemasList from "../components/CinemasList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./styles";

export const CinemasListView = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header showBackButton={false} navigation={navigation} />
      <CinemasList navigation={navigation} />
      <Footer navigation={navigation}/>
    </View>
  );
};

export default CinemasListView;


