import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CinemasListView from '../views/CinemasList';
import CinemasDetailView from '../views/CinemasDetail';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
    CinemasList: undefined;
    CinemaDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CinemasList">
          
          <Stack.Screen name="CinemasList" component={CinemasListView} />
          <Stack.Screen name="CinemaDetail" component={CinemasDetailView} />

        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Routes;