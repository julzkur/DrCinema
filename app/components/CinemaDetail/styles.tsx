import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    
  },
  name: {
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Georgia'
  },
  nameContainer: {
    alignItems: 'center',
    padding: 20
  },
  description: {
    fontSize: 16,
    fontFamily: 'Arial'
  },
  descriptionContainer: {
    alignItems: 'center',
    padding: 10,
  },
  address: {
    fontSize: 16,
    fontFamily: 'Arial'
  },
  addressContainer: {
    padding: 10,
    alignItems: 'flex-start'
  },
  phone: {
    paddingLeft: 10
  },
  phoneContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  phoneImage: {
    width: 30,
    height: 30
  },
  website: {
    //
  },
  imagecontainer: {
    padding: 10,
    alignItems: 'center'
  },
  image: {
    alignItems: 'center'
  }
});

export default styles;