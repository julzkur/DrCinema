import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const CinemaDetail = ({ navigation }: { navigation: any }) => {

  return (
      <View>
        <Text style={styles.name}>Name test</Text>
        <Text style={styles.description}>Description test</Text>
        <Text style={styles.address}>Address test</Text>
        <Text style={styles.phone}>Phone number test</Text>
      </View>
  );
};

export default CinemaDetail;