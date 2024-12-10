import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6C757D',
    height: 200,
    width: 160,
    padding: 5,
    borderRadius: 10,
  },
  imageContainer: {
    width: '100%',
    height: 70,
    alignItems: 'center',
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    padding: 5,
    alignItems: 'center'
  },
  nameContainer: {
    alignItems: 'center',
    paddingTop: 7
  },
  name: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  releaseYearContainer: {
    paddingTop: 10,
    alignItems: 'center'
  },
  releseYear: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Arial'
  },
  genresContainer: {
    alignItems: 'center',
    paddingTop: 10
  },
  genres: {
    color: 'white'
  }
});

export default styles