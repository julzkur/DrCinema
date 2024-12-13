import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40",
    padding: 16,
  },
  flatListContainer: {
      flexGrow: 1,
  },
  title: {
    fontSize: 28, 
    fontFamily: "Papyrus",
    fontWeight: 'bold',
    color: "#dddddd",
    letterSpacing: 5,
    marginTop: 10, 
    marginBottom: 5,
    textAlign: 'center',
  },
  UpcomingMoviesContainer: {
    flexDirection: 'column',
  },
  cinemasListContainer: {
    paddingBottom: 60,
  }
});

export default styles;