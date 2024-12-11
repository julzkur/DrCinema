import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { CinemaModel } from "@/app/models/cinema";
import CinemaCard from "../CinemaCard";
import dummyCinemas from "@/app/resources/dummyCinemas";
import styles from "./styles";


const CinemasList = ({ navigation }: {navigation:any}) => {
  const [cinemas, setCinemas] = useState<CinemaModel[]>(
    dummyCinemas.map((data) => {
      const cinema = new CinemaModel(
        data.id,
        data.name,
        data.phoneNumber,
        data.website,
        data.address,
        data.movies,
        data.description
      );
      console.log(cinema); 
      return cinema;
    })
  );

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Cinemas</Text>
          <FlatList
            data={cinemas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CinemaCard cinema={item} navigation={navigation} />
            )}
        />
      </View>
  );
};

export default CinemasList;