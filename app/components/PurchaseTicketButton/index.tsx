import React from "react";
import { TouchableOpacity, Text, Linking } from "react-native";
import styles from "./styles";

const PurchaseButton = ({ url, navigation }: { navigation: any, url: any }) => {

  const handlePurchasePress = () => {
    Linking.openURL(url)
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePurchasePress}>
      <Text style={styles.buttonText}>Purchase ticket</Text>
    </TouchableOpacity>
  );
};

export default PurchaseButton;
