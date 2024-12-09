import Routes from "./routes";
import {Provider as StoreProvider} from 'react-redux'
// import store from './redux/store'

export default function Index() {
  //<StoreProvider store={store}>
    return <Routes />;
  //</StoreProvider>
}