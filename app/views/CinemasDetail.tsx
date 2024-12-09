import React from "react";
import { View } from "react-native";
import CinemaDetail from "../components/CinemaDetail";
import Header from "@/app/components/Header";

export const CinemasDetailView = ({ navigation }: any) => {
  return (
    <View >
      <Header navigation={navigation} showBackButton={true} />
      <CinemaDetail navigation={navigation} />
    </View>
  );
};

export default CinemasDetailView;