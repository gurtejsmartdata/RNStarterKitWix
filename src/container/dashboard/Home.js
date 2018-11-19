/*
 * @file: Home.js
 * @description: Contains the Home Page Container.
 * @date: 9.Oct.2018
 * @author: Ravi Kumar
 * */

import React, { Suspense } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  BackHandler,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { goToAuth } from "../../config/navigation";
import { connect } from "react-redux";
import * as AppAction from "../../actions";
import { removeListeners } from "../../utilities/listeners";
import { handleBackPress } from "../../utilities/BackButtonHandling";
import { Navigation } from "react-native-navigation";
import { manageComponentStats } from "../../actions/componentStats";
import { userList } from "../../actions/list/listAction";

import UsersList from "./../../components/users/usersList";

let removeListener = true;

class Home extends React.Component {
  /*
		Constructor Function
	*/
  constructor(props) {
    super(props);
    this.isSideDrawerVisible = false;
    Navigation.events().bindComponent(this);
  }

  static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    console.log(props, state, "props, stateprops, state");
    if (props.listData !== (state && state.listData)) {
      return {
        listData: props.listData
      };
    }
    // No state update necessary
    return null;
  }

  navigationButtonPressed({ buttonId }) {
    !this.isSideDrawerVisible
      ? (this.isSideDrawerVisible = true)
      : (this.isSideDrawerVisible = false);
    if (buttonId === "buttonOne") {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: this.isSideDrawerVisible
          }
        }
      });
    }
  }

  componentDidAppear() {
    // BackHandler.addEventListener('hardwareBackPress', handleBackPress); // Back Button handling
  }
  componentDidDisappear() {
    // BackHandler.removeEventListener('hardwareBackPress', handleBackPress); // Back Button handling
  }

  componentDidMount() {
    this.props.userList();
    this.props.dispatch(
      manageComponentStats(
        this.props.componentId,
        "Home",
        this.props.componentStats
      )
    );
  }
  componentWillUnmount() {
    if (removeListener) {
      removeListeners();
    }
  }

  logout = () => {
    removeListener = false;
    this.props.logOut();
    goToAuth();
  };

  navigateToNextScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "Screen2",
        options: {
          bottomTabs: {
            visible: false,
            drawBehind: true,
            animate: true
          }
        }
      }
    });
  };

  render() {
    console.log(this.props, "props++home");
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>

          <UsersList
            listData={this.props.listData}
            navigateToNextScreen={this.navigateToNextScreen}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  item: {
    fontSize: 17
  },
  item1: {
    fontSize: 17,
    fontWeight: "bold"
  }
});

function mapStateToProps(state) {
  console.log(state.userList.listData, "statestatestatestate");
  return {
    componentStats: state.componentStats.componentStats,
    listData: state.userList.listData
  };
}

const mapDispatchToProps = dispatch => {
  return {
    userList: () => {
      dispatch(userList());
    },
    logOut: () => {
      dispatch(AppAction.logOut());
    },
    dispatch: () => {}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
