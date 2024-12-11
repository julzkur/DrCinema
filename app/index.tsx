import Routes from "./routes";
import {Provider as StoreProvider, useDispatch, useSelector} from 'react-redux'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import store from './redux/store';
import { useEffect } from "react";
import { View } from "react-native";
import { getMovies, getMovieById } from "./redux/features/moviesSlice";

const TestComponent = () => {
  const dispatch = useDispatch();

  const moviesCinemaView = useSelector((state:any) => {
    return state.movies.moviesCinemaView;
  });
  useEffect(() => {
    // dispatch(getMovies());
    dispatch(getMovieById("5"));
  }, []);

  return (
    <View>
 
    </View>
  );
};

export default function Index() {
  //<StoreProvider store={store}>
  return(
    <StoreProvider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <TestComponent/>
      </GestureHandlerRootView>
    </StoreProvider>
  )
}