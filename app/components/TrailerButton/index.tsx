import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const TrailerButton = ({ navigation, trailerId }: { navigation: any, trailerId:string }) => {

  const handlePress = () => {
    navigation.navigate("TrailerScreen", {trailerId:trailerId});
  };
  
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Horfa á stiklu</Text>
    </TouchableOpacity>
  );
};

export default TrailerButton;
