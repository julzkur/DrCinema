import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import CinemaModel from "@/app/models/cinema";
import styles from "./styles";


const CinemaCard = ({cinema, navigation}: {navigation: any, cinema: CinemaModel}) => {

    const handlePress = () => {
        navigation.navigate("Cinema", { cinema });
    };

    const handleWebsitePress = () => {
        if (cinema.website) {
          Linking.openURL(`https://${cinema.website}`).catch((err) =>
            console.error('Failed to open URL: ', err)
          );
        } else {
          console.log('No website available');
        }
      };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.cinemaItem}>
            <View style={styles.cinemaItem}>
                <Text style={styles.name}>{cinema.name}</Text>
            </View>
                <TouchableOpacity style={styles.websiteButton} onPress={() => handleWebsitePress()}>
                    <Image source={require('../../resources/webImgWhite.png')} style={styles.webImage}></Image>
                    <Text style={styles.website}>{cinema.website}</Text>
                </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default CinemaCard;