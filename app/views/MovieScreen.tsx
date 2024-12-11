import React from "react";
import { View } from "react-native";
import MovieScreen from "../components/MovieScreen";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

export const MovieScreenDisplay = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
   
      <Header navigation={navigation} showBackButton={true} />
      <MovieScreen navigation={navigation} />
      <Footer navigation={navigation} />
 
    </View>
  );
};

export default MovieScreenDisplay;