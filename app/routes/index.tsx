import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CinemasListView from '../views/CinemasList';
import CinemasDetailView from '../views/CinemasDetail';
import Cinema from '../models/cinema';

export type RootStackParamList = {
    Login: undefined;
    CinemasList: undefined;
    Cinema: {cinema: Cinema};
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
    return (

        <Stack.Navigator
          initialRouteName="CinemasList">
          
          <Stack.Screen name="CinemasList" component={CinemasListView} options={{ headerShown: false }} />
          <Stack.Screen name="Cinema" component={CinemasDetailView} options={{ headerShown: false }} />

        </Stack.Navigator>

  );
};

export default Routes;