import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { ReactNode } from "react";


// instead of : React.FC<{ navigation: any }> = ({ navigation }) => 
const CinemasList = ({ navigation }: { navigation: any }) => {

  return (
      <View style={styles.container}>
        <Text>hallo testtest</Text>
          {/* <FlatList
              data={filteredContacts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ContactCard contact={item} navigation={navigation} />
              )}
          /> */}
      </View>
  );
};

export default CinemasList;