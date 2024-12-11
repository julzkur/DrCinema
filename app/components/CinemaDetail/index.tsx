import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Link } from "expo-router";
import Cinema from "@/app/models/cinema";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "@/app/redux/features/theaterSlice";
import { useEffect } from "react";

const CinemaDetail = ({ navigation, cinema }: {navigation:any, cinema:Cinema}) => {
  // const dispatch = useDispatch();
  // const name:string = useSelector((state:any) => {
  //   return state.name.value;
  // })
// 
  // useEffect(() => {
  //   dispatch(updateName());
  // }, [dispatch]);

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
        <Text style={styles.phone}>{cinema.phoneNumber}</Text>
      </View>
      <View style={styles.webContainer}>
        <Image source={require('../../resources/webImgWhite.png')} style={styles.phoneAndAddressImage}></Image>
        <Link style={styles.webLink} href={'https://malid.ru.is/'}>Go To Website</Link>
      </View>
    </View>
  );
};

export default CinemaDetail;