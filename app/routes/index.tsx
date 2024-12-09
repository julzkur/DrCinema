import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


export type RootStackParamList = {
    // Movie: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
    {/* return (
    <Stack.Navigator
      initialRouteName="CinemasList"
      screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="CinemasList" component={CinemasListView} />
      
    </Stack.Navigator>
  );*/}
};

export default Routes;