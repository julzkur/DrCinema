import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6C757D',
    height: 130,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginVertical: 20,
  },
  thumbnailContainer: {

    borderRadius: 10,
    width: 130,
  },
  thumbnail: {
    width: 130,
    height: 130,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    flex: 1,  
    flexDirection: 'column',  
    padding: 10,
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 5,
  },
  name: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  releaseDateContainer: {
    flex: 1,
    alignItems: 'center',

  },
  ReleaseDate: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Arial'
  }
});
  
export default styles;