import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import MovieCard from "../MovieCard";
import dummyMovies from '../../resources/dummyData'

const MoviesList = ({ navigation }: { navigation: any }) => {

  return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Movies shown in this cinema</Text>
        </View>
        <View style={styles.cardContainer}>
          {dummyMovies.map((item) => (
          <View style={styles.cardWrapper} key={item.id}>
            <MovieCard key={item.id} movie={item} navigation={navigation} />
          </View>
          ))}
        </View>
      </View>
  );
};

export default MoviesList;