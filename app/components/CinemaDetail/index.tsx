import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const CinemaDetail = ({ navigation }: { navigation: any }) => {

  return (
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image source={require('../../resources/dummyImg.jpg')} ></Image>
        </View>
        <View style={styles.nameContainer}>
          	<Text style={styles.name}>Name test</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam eveniet, quisquam neque cum totam provident ea earum quasi aut hic esse officia. Sed qui quia ratione mollitia iusto commodi.</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Address test</Text>
        </View>
        <View style={styles.phoneContainer}>
          <Image source={require('../../resources/phone.png')} style={styles.phoneImage}></Image>
          <Text style={styles.phone}>+354 1234567</Text>
        </View>
      </View>
  );
};

export default CinemaDetail;