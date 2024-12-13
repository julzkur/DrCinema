import React from "react";
import { View } from "react-native";
import TrailerScreen from "../components/TrailerScreen";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

export const TrailerScreenView = ({ navigation }: any) => {
  return (
    <View style={styles.cinemasListContainer}>
      <ScrollView contentContainerStyle={styles.cinemaDScrollContainer}>
        <Header navigation={navigation} showBackButton={true} />
        <TrailerScreen />
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default TrailerScreenView;