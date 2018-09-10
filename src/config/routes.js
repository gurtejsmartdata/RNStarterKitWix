
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
// Registering Containers
import LoginScreen from "../containers/LoginScreen";
import MainScreen from '../containers/MainScreen';
import DashBoard from '../containers/DashBoard';
import Maps from '../containers/Maps';
import Loader from '../containers/Loader'
// Registering Components
import SideMenu from '../components/SideMenu'

// React native Api components used

import Types from "../containers/NavigationTypes";
import Actions from "../containers/Actions";
import Transitions from "../containers/Transitions";

import Push from "../containers/types/Push";
import Drawer from "../containers/types/Drawer";
import ListScreen from "../containers/types/ListScreen";
import DummyScreen from "../containers/types/DummyScreen";
import LightBox from "../containers/types/LightBox";
import Notification from "../containers/types/Notification";
import Modal from "../containers/types/Modal";
import CustomTopBarScreen from "../containers/types/CustomTopBarScreen";
import CustomButtonScreen from "../containers/types/CustomButtonScreen";
import TopTabs from "../containers/types/TopTabs";
import TabOne from "../containers/types/tabs/TabOne";
import TabTwo from "../containers/types/tabs/TabTwo";

import CollapsingHeader from "../containers/transitions/CollapsingHeader";
import SharedElementTransitions from "../containers/transitions/SharedElementTransitions";

import Cards from "../containers/transitions/sharedElementTransitions/Cards/Cards";
import CardsInfo from "../containers/transitions/sharedElementTransitions/Cards/Info";

import Masonry from "../containers/transitions/sharedElementTransitions/Masonry/Masonry";
import MasonryItem from "../containers/transitions/sharedElementTransitions/Masonry/Item";


export function registerScreens(store, Provider) {
    Navigation.registerComponent("LoginScreen",() => LoginScreen,store,Provider);
    Navigation.registerComponent('MainScreen', () => MainScreen,store,Provider);
    Navigation.registerComponent("DashBoard",() => DashBoard,store,Provider);
    Navigation.registerComponent('Maps', () => Maps,store,Provider);
    Navigation.registerComponent('Loader', () => Loader,store,Provider);
    Navigation.registerComponent('SideMenu', () => SideMenu,store,Provider);
    Navigation.registerComponent("example.Types", () => Types,store,Provider);
    Navigation.registerComponent("example.Actions", () => Actions);
    Navigation.registerComponent("example.Transitions", () => Transitions);
    Navigation.registerComponent("example.Types.Push", () => Push);
    Navigation.registerComponent("example.Types.Drawer", () => Drawer);
    Navigation.registerComponent("example.Types.Screen", () => Drawer);
    Navigation.registerComponent("example.Types.ListScreen", () => ListScreen);
    Navigation.registerComponent("example.Types.DummyScreen", () => DummyScreen);
    Navigation.registerComponent("example.Types.Modal", () => Modal);
    Navigation.registerComponent("example.Types.LightBox", () => LightBox);
    Navigation.registerComponent(
      "example.Types.Notification",
      () => Notification
    );
    Navigation.registerComponent(
      "example.Types.CustomTopBarScreen",
      () => CustomTopBarScreen
    );
    Navigation.registerComponent(
      "example.Types.CustomButtonScreen",
      () => CustomButtonScreen
    );
    Navigation.registerComponent("example.Types.TopTabs", () => TopTabs);
    Navigation.registerComponent("example.Types.TopTabs.TabOne", () => TabOne);
    Navigation.registerComponent("example.Types.TopTabs.TabTwo", () => TabTwo);
  
    Navigation.registerComponent(
      "example.Transitions.CollapsingHeader",
      () => CollapsingHeader
    );
    Navigation.registerComponent(
      "example.Transitions.SharedElementTransitions",
      () => SharedElementTransitions
    );
    Navigation.registerComponent(
      "example.Transitions.SharedElementTransitions.Cards",
      () => Cards
    );
    Navigation.registerComponent(
      "example.Transitions.SharedElementTransitions.Cards.Info",
      () => CardsInfo
    );
    Navigation.registerComponent(
      "example.Transitions.SharedElementTransitions.Masonry",
      () => Masonry
    );
    Navigation.registerComponent(
      "example.Transitions.SharedElementTransitions.Masonry.Item",
      () => MasonryItem
    );
}

export function registerScreenVisibilityListener() {
    new ScreenVisibilityListener({
        willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
        didAppear: ({ screen, startTime, endTime, commandType }) =>
            console.log(
                "screenVisibility",
                `Screen ${screen} displayed in ${endTime -
                startTime} millis [${commandType}]`
            ),
        willDisappear: ({ screen }) =>
            console.log(`Screen will disappear ${screen}`),
        didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
    }).register();
}
