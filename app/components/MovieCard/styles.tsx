import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6C757D',
    height: 200,
    width: 160,
    borderRadius: 10,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 4,
    width: '100%',
    height: 70,
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 7,
    paddingLeft: 5,
    paddingRight: 5,
  },
  name: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  releaseYearContainer: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  releseYear: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Arial'
  },
  genresContainer: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  genres: {
    color: 'white'
  }
});

export default styles