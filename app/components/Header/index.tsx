import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";


const Header = ({ showBackButton=false, navigation}: {showBackButton:boolean, navigation:any}) => {
  
  return (
    <View style={styles.container}>
      
      
      {showBackButton && (
      <View style={[styles.backButtonContainer]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require('../../resources/backArrowWhite.png')} style={styles.backButtonImage}></Image>
          </TouchableOpacity>
      </View>
      )}
      <View style={[styles.titleContainer]}>
        <Text style={styles.title}>Dr Cinema</Text>
      </View>
      <View style={[styles.imageContainer]}>
        <Image source={require('../../resources/logoWhite.png')} style={styles.image}></Image>
      </View>
    </View>
  );
};

export default Header;