import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";




const PurchaseButton = ({ navigation }: { navigation: any }) => {

  const handlePurchasePress = () => {
    navigation.navigate("PurchaseScreen"); // Navigate to the Purchase screen
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePurchasePress}>
      <Text style={styles.buttonText}>Purchase ticket</Text>
    </TouchableOpacity>
  );
};

export default PurchaseButton;
