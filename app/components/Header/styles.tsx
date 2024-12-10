import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    height: 60,
    justifyContent: "space-between",
    backgroundColor: "#212529", 
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  backButtonContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  backButton: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  backButtonImage: {
    width: 40,
    height: 40,
  },
  image: {
    width: 40,
    height: 40,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Papyrus',
  }
});
  
export default styles;