import React from "react";
import { View, Text, Image, TouchableOpacity, Linking, Alert } from "react-native";
import styles from "./styles";
import CinemaModel from "@/app/models/cinema";


const CinemaDetail = ({ cinema }: {cinema: CinemaModel}) => {
  const makeCall = (phoneNumber: string) => {
    if (phoneNumber === "Phone not available") {
      Alert.alert('Error', 'Phone number is not available.');
      return;
    }

    const phoneUrl = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(phoneUrl);
        } else {
          Alert.alert('Error', 'Unable to open phone dialer.');
        }
      })
      .catch((error) => console.error('Error opening phone dialer:', error));
  };

  const navigateToWebsite = (url: string) => {
    if (url === "Website not available"){
      Alert.alert('Error', 'Website not available');
      return;
    }
    Linking.openURL(`https://${url}`);
  };

  const navigateToJais = (address: string) => {
    if (address === "Address not available"){
      Alert.alert('Error', 'Address not available');
      return;
    }
    Linking.openURL(`https://ja.is/?q=${address}`)
  }
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
        <TouchableOpacity onPress={() => navigateToJais(cinema.address)}>
          <Text style={styles.address}>{cinema.address}, {cinema.city}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.phoneAndAddressContainer}>
        <Image source={require('../../resources/phoneWhite.png')} style={styles.phoneAndAddressImage}></Image>
        <TouchableOpacity onPress={() => makeCall(cinema.phone)}>
          <Text style={styles.phone}>{cinema.phone}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.webContainer}>
        <Image source={require('../../resources/webImgWhite.png')} style={styles.phoneAndAddressImage}></Image>
        <TouchableOpacity style={styles.webLink} onPress={() => navigateToWebsite(cinema.website)} >
          <Text style={styles.webLink}>
            {cinema.website}
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default CinemaDetail;