import React from "react";
import { View } from "react-native";
import CinemaDetail from "../components/CinemaDetail";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";
import { ScrollView } from "react-native-gesture-handler";

export const CinemasDetailView = ({ navigation }: any) => {
  return (
    <ScrollView>
      <Header navigation={navigation} showBackButton={true} />
      <CinemaDetail navigation={navigation} />
      <Footer navigation={navigation} />
    </ScrollView>
  );
};

export default CinemasDetailView;