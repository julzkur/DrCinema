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
  imagecontainer: {
    paddingBottom: 10,
    alignItems: 'center'
  },
  image: {
    alignItems: 'center'
  },
  webContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  webLink: {
    paddingLeft: 10,
    alignItems: 'center',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Arial'
  },
  textContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between", // Align label and value
    alignItems: "center",
    borderBottomWidth: 1, // Add a dividing line for sections
    borderBottomColor: "#555", // Subtle line color
  },
  
  textLabel: {
    fontSize: 16,
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  
  textValue: {
    fontSize: 16,
    color: "white",
    fontFamily: "Arial",
  },
  genreContainer: {
    paddingTop: 10, // Adds space above the genre text
  },
  buttonContainer: {
    marginTop: 20, // Space between the content and the button
    alignItems: "center", // Center the button horizontally
  },
  
  
  
  
  
  
});

export default styles;