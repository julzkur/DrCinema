import Routes from "./routes";
import {Provider as StoreProvider} from 'react-redux'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import store from './redux/store'


export default function Index() {
  
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StoreProvider store={store}>

        <Routes />
        
      </StoreProvider>
    </GestureHandlerRootView>
  );
};