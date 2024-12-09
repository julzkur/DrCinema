import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CinemasListView from '../views/CinemasList';
import CinemasDetailView from '../views/CinemasDetail';


export type RootStackParamList = {
    CinemasList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
    return (
    <Stack.Navigator
      initialRouteName="CinemasList"
      screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="CinemasList" component={CinemasListView} />
      <Stack.Screen name="CinemaDetail" component={CinemasDetailView} />
      
    </Stack.Navigator>
  );
};

export default Routes;