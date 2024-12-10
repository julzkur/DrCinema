import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cinemaItem: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#777777",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 10,
    height: 120,
  },
  cinemaName: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    height: '90%',
    paddingTop: 10,
    backgroundColor: "#777777",
  },
  cinemaDetails: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#aaaaaa",
    marginTop: 5,
    justifyContent: 'center',
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  websiteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#555555", 
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  website: {
    fontSize: 14,
    color: "#fff",
    textAlign: 'center',
    marginBottom: 5,
  },
  moviesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 8,
  },
  movieItem: {
    fontSize: 16,
    color: "#eeeeee",
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  noMovies: {
    fontSize: 16,
    color: "#ff6b6b",
  },
});

export default styles;