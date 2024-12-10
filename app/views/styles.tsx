import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cinemasListContainer: {
      flex: 1, 
      backgroundColor: "#343a40", 
    },
    cinemaDetailContainer: {
      flex: 1,
      backgroundColor: "#343a40",
    }, 
    cinemaDScrollContainer: {
      flexGrow: 1,
      paddingBottom: 60,
    },
    noCinemaContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#212529",
    },
    noCinemaText: {
      color: "white",
      fontSize: 16,
    },
});

export default styles;