import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
                
                <TouchableOpacity style={styles.websiteButton} onPress={() => { /* Handle website press */ }}>
                    <Text style={styles.website}>{cinema.website}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default CinemaCard;