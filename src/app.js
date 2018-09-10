/*
Name : Parshant Nagpal
Description : 'Contains the main app class for loading the particiular screen on root reducer change in app '
Date : 7 Sept 2018
*/


import setup from "./store/setup";
import { registerScreens, registerScreenVisibilityListener } from "./config/routes";
import { Provider } from "react-redux";
import startApp from './config/navigators'
// Registering the main screen
const store = setup();
registerScreens(store, Provider);
registerScreenVisibilityListener();

// notice that this is just a simple class, it's not a React component
export default class App {
  constructor() {
    // since react-redux only works on components, we need to subscribe this class manually
    store.subscribe(this.onStoreUpdate.bind(this));
  }
 
  onStoreUpdate() {
    const { root } = store.getState().app;
    console.log('root',root)
    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    if (this.currentRoot != root) {
      this.currentRoot = root;
      console.log('working')
      startApp(root);
    }
  }
}

