import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Cinema from "@/app/models/cinema";
import styles from "./styles";

interface CinemaCardProps {
  cinema: Cinema;
  navigation: any;
}

const CinemaCard: React.FC<CinemaCardProps> = ({ cinema, navigation }) => {

    const handlePress = () => {
        navigation.navigate("Cinema", { cinema });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.cinemaItem}>
            <View style={styles.cinemaName}>
                <Text style={styles.name}>{cinema.name}</Text>
                <TouchableOpacity style={styles.websiteButton} onPress={() => { /* Handle website press */ }}>
                    <Text style={styles.website}>{cinema.website}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cinemaDetails}>
                <View style={styles.moviesContainer}>
                    {cinema.movies.length > 0 ? (
                        cinema.movies.slice(0, 3).map((movie, index) => (
                        <Text key={index} style={styles.movieItem}>
                            {movie}
                        </Text>
                        ))
                        ) : (
                        <Text style={styles.noMovies}>No movies available</Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CinemaCard;