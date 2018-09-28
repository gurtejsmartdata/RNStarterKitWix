
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/config/routes';
import { Provider } from "react-redux";
import setup from "./src/store/setup";
const store = setup();
registerScreens(store, Provider);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Loader'
      }
    },
  });
});