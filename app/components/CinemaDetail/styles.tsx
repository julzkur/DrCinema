import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343a40',
    overflow: 'scroll'
  },
  name: {
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    color: 'white'
  },
  nameContainer: {
    alignItems: 'center',
    padding: 20
  },
  description: {
    fontSize: 16,
    fontFamily: 'Arial',
    color: 'white'
  },
  descriptionContainer: {
    alignItems: 'center',
    padding: 10,
  },
  address: {
    fontSize: 16,
    paddingLeft: 10,
    color: 'white'
  },
  phone: {
    paddingLeft: 10,
    alignItems: 'center',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Arial'
  },
  phoneAndAddressContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  phoneAndAddressImage: {
    width: 30,
    height: 30,
    alignItems: 'center'
  },
  website: {
    //
  },
  imagecontainer: {
    paddingBottom: 10,
    alignItems: 'center'
  },
  image: {
    alignItems: 'center'
  }
});

export default styles;