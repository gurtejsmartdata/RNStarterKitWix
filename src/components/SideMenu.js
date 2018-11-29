/*
 * @file: SideMenu.js
 * @description: Contains the SideMenu Container.
 * @date: 9.Oct.2018
 * @author: Ravi Kumar
 * */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
var { height, width } = Dimensions.get("window");
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AppAction from "../actions";
import Icon from "react-native-vector-icons/FontAwesome";
import { goToAuth, goToHistory, goHome, goToAlert } from "../config/navigation";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.hideSideMenu = this.hideSideMenu.bind(this);
    this.setScrenStack = this.setScrenStack.bind(this);
  }
  hideSideMenu() {
    this.props.appAction.mergeOptions(this.props.componentId, false);
    // Navigation.mergeOptions(this.props.componentId, {
    //   sideMenu: {
    //     left: {
    //       visible: false
    //     }
    //   }
    // });
  }

  setScrenStack(screen, visible) {
    this.props.appAction.setScrenStack("MY_STACK", screen, visible);
    this.hideSideMenu();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "#05B8CC", flex: 0.25 }} />
        <View style={styles.text}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() => {
              goHome();
            }}
          >
            <View style={{ flex: 0.2 }}>
              <Icon
                name="home"
                size={width * 0.07}
                style={{ alignSelf: "center", marginLeft: width * 0.055 }}
              />
            </View>

            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={styles.welcome}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() => {
              alert("Under Developement");
              this.hideSideMenu();
            }}
          >
            <View style={{ flex: 0.2 }}>
              <Icon
                name="cog"
                size={width * 0.07}
                style={{
                  alignSelf: "center",
                  marginLeft: width * 0.055
                }}
              />
            </View>

            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={styles.welcome}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() => {
              this.hideSideMenu();
              this.props.appAction.logOut();
              goToAuth();
            }}
          >
            <View style={{ flex: 0.2 }}>
              <Icon
                name="sign-out"
                size={width * 0.07}
                style={{
                  alignSelf: "center",
                  marginLeft: width * 0.055
                }}
              />
            </View>

            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={styles.welcome}>Signout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20
  },
  container: {
    flex: 1
  },
  text: {
    height: (height * 10) / 100,
    width: (width * 80) / 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  marginTop: {
    marginTop: (height * 5) / 100
  }
});
const mapStateToProps = state => ({
  user: state.user,
  app: state.app
});
const mapDispatchToProps = dispatch => ({
  appAction: bindActionCreators(AppAction, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(SideMenu);
