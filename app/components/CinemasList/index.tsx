import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";

const CinemasList: React.FC<{ navigation: any }> = ({ navigation }) => {

  return (
      <View style={styles.container}>
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