import React from "react";
import { View } from "react-native";
import CinemasList from "../components/CinemasList";

export const CinemasListView = ({ navigation }: any) => {
  return (
    <View >
      <CinemasList navigation={navigation} />
    </View>
  );
};

export default CinemasListView;


