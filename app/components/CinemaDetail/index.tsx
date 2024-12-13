import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import styles from "./styles";
import CinemaModel from "@/app/models/cinema";


const CinemaDetail = ({ cinema }: {cinema: CinemaModel}) => {

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={require('../../resources/dummyImg.jpg')} ></Image>
      </View>
      <View style={styles.nameContainer}>
          <Text style={styles.name}>{cinema.name}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{cinema.description}</Text>
      </View>
      <View style={styles.phoneAndAddressContainer}>
        <Image source={require('../../resources/addressWhite.png')} style={styles.phoneAndAddressImage}></Image>
        <Text style={styles.address}>{cinema.address}</Text>
      </View>
      <View style={styles.phoneAndAddressContainer}>
        <Image source={require('../../resources/phoneWhite.png')} style={styles.phoneAndAddressImage}></Image>
        <Text style={styles.phone}>{cinema.phone}</Text>
      </View>
      <View style={styles.webContainer}>
        <Image source={require('../../resources/webImgWhite.png')} style={styles.phoneAndAddressImage}></Image>
        <TouchableOpacity style={styles.webLink} onPress={() => Linking.openURL("https://withfra.me")} ><Text style={styles.webLink}>{cinema.website}</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default CinemaDetail;