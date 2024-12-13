import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40",
    padding: 10,
  },
  cardContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#343a40',
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  titleContainer: {
    padding: 10
  },
  cardWrapper: {
    marginBottom: 16,
  },
  noMovies: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default styles;