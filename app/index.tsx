import Routes from "./routes";
import {Provider as StoreProvider} from 'react-redux'
// import store from './redux/store'
import CinemasDetailView from "./views/CinemasDetail";

export default function Index() {
  //<StoreProvider store={store}>
    return <CinemasDetailView />;
  //</StoreProvider>
}