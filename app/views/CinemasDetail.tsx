import React from "react";
import { View } from "react-native";
import CinemaDetail from "../components/CinemaDetail";

export const CinemasDetailView = ({ navigation }: any) => {
  return (
    <View >
      <CinemaDetail navigation={navigation} />
    </View>
  );
};

export default CinemasDetailView;