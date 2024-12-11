import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCinemas } from '@/app/redux/cinemaSlice';
import { RootState, AppDispatch } from "@/app/redux/store";
import CinemaCard from "../CinemaCard";
import styles from "./styles";
import UpcomingMovieButton from "../UpcomingMoviesButton";


const CinemasList : React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cinemas, loading, error } = useSelector((state: RootState) => state.cinemas);
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3NTZlZjQzYWE2MjRlOTNlZTkyNDlhMiIsImlhdCI6MTczMzg3NDI1MCwiZXhwIjoxNzMzOTYwNjUwfQ.w7DNbCJ1ox41HfUHWhTLixBj8xlrDjSlPmYCQGfjVik";  // Hardcode the token here
  console.log('Cinemas from Redux:', cinemas);

  useEffect(() => {
    console.log('Token:', token);
    if (token) {
      dispatch(fetchCinemas(token)); // Pass token to the fetchCinemas action
    }
  }, [dispatch, token]);

  if (loading) {
    return <Text>Loading cinemas...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
      <View style={styles.container}>
        <View style={styles.UpcomingMoviesContainer}>
          <Text style={styles.title}>Cinemas</Text>
          <UpcomingMovieButton navigation={navigation} />
        </View>
          <FlatList
            data={cinemas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              console.log('Rendering CinemaCard for:', item);
              return <CinemaCard cinema={item} navigation={navigation} />
            }}
        />
      </View>
  );
};

export default CinemasList;