import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CinemasListView from '../views/CinemasList';
import CinemasDetailView from '../views/CinemasDetail';
import Cinema, { CinemaModel } from '../models/cinema';
import MovieModel from '../models/movie';
import UpcomingMoviesView from '../views/UpcomingMovies';
import MovieScreen from '../components/MovieScreen';
import MovieScreenDisplay from '../views/MovieScreen';
import TrailerScreen from '../components/TrailerScreen';
import TrailerScreenView from '../views/TrailerScreenView';

export type RootStackParamList = {
    Login: undefined;
    CinemasList: undefined;
    Cinema: {cinema: Cinema};
    UpcomingMovies: undefined;
    MovieScreen: {movie: MovieModel, cinema: CinemaModel};
    TrailerScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
    return (

        <Stack.Navigator
          initialRouteName="CinemasList">
          
          <Stack.Screen name="CinemasList" component={CinemasListView} options={{ headerShown: false }} />
          <Stack.Screen name="Cinema" component={CinemasDetailView} options={{ headerShown: false }} />
          <Stack.Screen name="UpcomingMovies" component={UpcomingMoviesView} options={{ headerShown: false }} />
          <Stack.Screen name="MovieScreen" component={MovieScreenDisplay} options={{ headerShown: false }} />
          <Stack.Screen name="TrailerScreen" component={TrailerScreenView} options={{ headerShown: false }} />

        </Stack.Navigator>

  );
};

export default Routes;