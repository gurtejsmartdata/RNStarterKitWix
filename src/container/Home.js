/*
 * @file: Home.js
 * @description: Contains the Home Page Container.
 * @date: 9.Oct.2018
 * @author: Parshant Nagpal
 * */

import React from "react";
import { View, Text, Button, StyleSheet, BackHandler } from "react-native";
import { goToAuth } from "../config/navigation";
import { connect } from "react-redux";
import * as AppAction from "../actions";
import { removeListeners } from "../utilities/listeners";
import { handleBackPress } from "../utilities/BackButtonHandling";
import { Navigation } from "react-native-navigation";
import { manageComponentStats } from "./../actions/componentStats";
let removeListener = true;
class Home extends React.Component {
  /*
		Constructor Function
	*/
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  componentDidAppear() {
    // BackHandler.addEventListener('hardwareBackPress', handleBackPress); // Back Button handling
  }
  componentDidDisappear() {
    // BackHandler.removeEventListener('hardwareBackPress', handleBackPress); // Back Button handling
  }

  componentDidMount() {
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
  static options(passProps) {
    return {
      statusBar: {
        visible: true,
        style: "dark",
        hideWithTopBar: true,
        blur: true
      },
      searchBar: true,
      searchBarHiddenWhenScrolling: true,
      searchBarPlaceholder: "Search", // iOS 11+ SearchBar placeholder
      topBar: {
        hideOnScroll: true,
        title: {
          text: "My Screen",
          color: "red"
        },
        subtitle: {
          text: "Title",
          fontSize: 14,
          color: "red",
          fontFamily: "Helvetica",
          alignment: "center"
        },
        // background: {
        //   color: "red",
        //   component: {
        //     name: "NavBar"
        //   }
        // },
        drawBehind: true,
        visible: true,
        animate: true,
        sideMenu: {
          left: {
            width: 260,
            height: 270,
            visible: false,
            enabled: true
          },
          right: {
            width: 260,
            height: 270,
            visible: false,
            enabled: true
          }
        }
      }
    };
  }

  logout = () => {
    removeListener = false;
    this.props.dispatch(AppAction.logOut());
    goToAuth();
  };
  render() {
    console.log(this.props, "props++home");
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button onPress={() => this.logout()} title="Sign Out" />
        <Button
          onPress={() => {
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
          }}
          title="View next screen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

function mapStateToProps(state) {
  console.log(state, "statestatestatestate");
  return { componentStats: state.componentStats.componentStats };
}

export default connect(
  mapStateToProps,
  null
)(Home);
