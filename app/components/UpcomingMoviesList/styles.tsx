import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40",
    padding: 10,
    paddingBottom: 60,
  },
  cardContainer: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#343a40',
    justifyContent: "space-between",
    paddingBottom: 60,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  titleContainer: {
    padding: 10
  },

});

export default styles;