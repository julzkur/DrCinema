import { StyleSheet } from "react-native";
import UpcomingMovieButton from "../UpcomingMoviesButton";

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
    paddingLeft: 16,
  },
  UpcomingMoviesContainer: {
    flexDirection: 'column',
  }
});

export default styles;