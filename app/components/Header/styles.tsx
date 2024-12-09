import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    height: 80,
    paddingTop: 10,
    justifyContent: "center",
    backgroundColor: "#caf0f8", 
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
    justifyContent: 'center',
  },
  backButtonImage: {
    alignItems: 'center',
    position: 'absolute',
    start: 10,
    width: 40,
    height: 40,
  },
  image: {
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'flex-end',
    margin: 10,
    paddingBottom: 8
  }
});
  
export default styles;