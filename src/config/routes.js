/*
 * @file: routes.js
 * @description: Contains all routes registered.
 * @date: 9.Oct.2018
 * @author: Ravi Kumar
 * */
import { Navigation } from "react-native-navigation";

export const registerScreens = (store, Provider) => {
  // Loader Stack
  Navigation.registerComponentWithRedux(
    "Loader",
    () => require("../container/AppContainer").default,
    Provider,
    store
  );
  // Auth stack
  Navigation.registerComponentWithRedux(
    "SignIn",
    () => require("../container/auth/SignIn").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "SignUp",
    () => require("../container/auth/SignUp").default,
    Provider,
    store
  );
  // Dashboard Stack
  Navigation.registerComponentWithRedux(
    "Home",
    () => require("../container/dashboard/Home").default,
    Provider,
    store
  );
  Navigation.registerComponent(
    "HistoryAll",
    () => require("../container/dashboard/HistoryAll").default
  );
  Navigation.registerComponent(
    "Notifications",
    () => require("../container/dashboard/Notifications").default
  );

  Navigation.registerComponentWithRedux(
    "Screen2",
    () => require("../container/other/Screen2").default,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "Screen3",
    () => require("../container/other/Screen3").default,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "Screen4",
    () => require("../container/other/Screen4").default,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "SideMenu",
    () => require("../components/SideMenu").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "NavBar",
    () => require("../components/navBar").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "NavBar",
    () => require("../components/navBar").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "NavBar",
    () => require("../components/navBar").default,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "AnimatedImageScreen",
    () => require("../components/other/AnimatedImageScreen").default,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "CardScannerScreen",
    () => require("../components/other/CardScannerScreen").default,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "FeatureHighlightScreen",
    () => require("../components/other/FeatureHighlightScreen").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "FormScreen",
    () => require("../components/other/FormScreen").default,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "BasicListScreen",
    () => require("../components/other/BasicListScreen").default,
    Provider,
    store
  );

  Navigation.registerComponent(
    "CustomButton",
    () => require("../components/customLeft").default
  );
};
