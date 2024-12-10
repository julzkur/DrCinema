import Routes from "./routes";
import {Provider as StoreProvider} from 'react-redux'
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import store from './redux/store'
import CinemasDetailView from "./views/CinemasDetail";
import CinemasListView from "./views/CinemasList";

export default function Index() {
  //<StoreProvider store={store}>
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
        <CinemasListView />
    </GestureHandlerRootView>
  )
  //</StoreProvider>
}