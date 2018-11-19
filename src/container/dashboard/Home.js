/*
 * @file: Home.js
 * @description: Contains the Home Page Container.
 * @date: 9.Oct.2018
 * @author: Ravi Kumar
 * */

import React from "react";
import { View, StyleSheet } from "react-native";
import { goToAuth } from "../../config/navigation";
import { connect } from "react-redux";
import * as AppAction from "../../actions";
import { removeListeners } from "../../utilities/listeners";
import { handleBackPress } from "../../utilities/BackButtonHandling";
import { Navigation } from "react-native-navigation";
import { manageComponentStats } from "../../actions/componentStats";
import { userList } from "../../actions/list/listAction";
import Loader from "./../../components/common/loader";

import UsersList from "./../../components/users/usersList";

let removeListener = true;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.isSideDrawerVisible = false;
    Navigation.events().bindComponent(this);
  }

  static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
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
    if (this.props.loading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Loader />
        </View>
      );
    }
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

function mapStateToProps(state) {
  return {
    componentStats: state.componentStats.componentStats,
    listData: state.userList.listData,
    loading: state.userList.loading
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

const styles = StyleSheet.create({});
