import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Footer = ({ navigation }: {navigation:any}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Dr. Cinema. All rights reserved.</Text>
    </View>
  );
};

export default Footer