import React from "react";
import { TouchableOpacity, Text, Linking } from "react-native";
import styles from "./styles";

const PurchaseButton = ({ url }: { url: any }) => {

  const handlePurchasePress = () => {
    Linking.openURL(url)
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePurchasePress}>
      <Text style={styles.buttonText}>Kaupa miða</Text>
    </TouchableOpacity>
  );
};

export default PurchaseButton;
