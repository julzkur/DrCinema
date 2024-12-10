import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    height: 110,
    paddingTop: 20,
    justifyContent: "center",
    backgroundColor: "#212529", 
    paddingLeft: 14,
    position: "relative"
  },
  backButton: {
    position: "absolute",
    margin: 10,
    marginTop: 20,
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButtonImage: {
    alignItems: 'center',
    position: 'absolute',
    start: 10,
    width: 40,
    height: 40,
  },
  image: {
    width: 40,
    height: 40,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginEnd: 10,
    paddingBottom: 0
  }
});
  
export default styles;