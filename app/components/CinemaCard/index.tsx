import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CinemaModel from "@/app/models/cinema";
import styles from "./styles";

interface CinemaCardProps {
  cinema: CinemaModel;
  navigation: any;
}

const CinemaCard: React.FC<CinemaCardProps> = ({ cinema, navigation }) => {

    const handlePress = () => {
        navigation.navigate("Cinema", { cinema });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.cinemaItem}>
            <View style={styles.cinemaItem}>
                <Text style={styles.name}>{cinema.name}</Text>
            </View>
                <TouchableOpacity style={styles.websiteButton} onPress={() => { /* Handle website press */ }}>
                    <Image source={require('../../resources/webImgWhite.png')} style={styles.webImage}></Image>
                    <Text style={styles.website}>{cinema.website}</Text>
                </TouchableOpacity>
                
            {/*    
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
            </View> */}
        </TouchableOpacity>
    );
};

export default CinemaCard;