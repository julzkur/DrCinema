import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cinemasListContainer: {
      flex: 1, 
      backgroundColor: "#343a40", 
    },
    contentContainer: {
      flexGrow: 1,
      padding: 10,
      backgroundColor: '#343a40',
      justifyContent: "space-between",
      paddingBottom: 60,
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
    title: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
    },
});

export default styles;