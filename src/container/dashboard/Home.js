/*
 * @file: Home.js
 * @description: Contains the Home Page Container.
 * @date: 9.Oct.2018
 * @author: Ravi Kumar
 * */

import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  BackHandler,
  FlatList,
  Image
} from "react-native";
import { goToAuth } from "../../config/navigation";
import { connect } from "react-redux";
import * as AppAction from "../../actions";
import { removeListeners } from "../../utilities/listeners";
import { handleBackPress } from "../../utilities/BackButtonHandling";
import { Navigation } from "react-native-navigation";
import { manageComponentStats } from "../../actions/componentStats";
import { userList } from "../../actions/list/listAction";
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
  componentWillMount() {
    console.log("WILLLLLMOUNTING");
    this.props.userList();
  }

  navigationButtonPressed({ buttonId }) {
    console.log("WILLLLLMOUNTING");
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
    console.log("DIDDDMOUNTING");

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

  render() {
    console.log(this.props, "props++home");
    return (
      <View style={{ flex: 1 }}>
        {/* <Text>Hello from Home screen.</Text> */}
        {/* <Button onPress={() => this.logout()} title="Sign Out" /> */}
        {/* <Button
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
        /> */}
        {/* <View style={{ flex: 0.5, backgroundColor: "white" }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
              color: "black"
            }}
          >
            Your Friends
          </Text>
        </View> */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.05 }}>
            <Text
              style={{ fontSize: 25, textAlign: "center", fontWeight: "bold" }}
            >
              Friends
            </Text>
          </View>
          <View style={{ flex: 0.95 }}>
            <FlatList
              data={
                this.props.listData && this.props.listData.length > 0
                  ? this.props.listData
                  : []
              }
              renderItem={({ item, index }) => (
                <View
                  style={{
                    height: 100,
                    flexDirection: "row",
                    borderWidth: 2,
                    borderColor: "#dadada",
                    marginHorizontal: 20,
                    marginBottom: 10,
                    borderRadius: 20,
                    overflow: "hidden"
                  }}
                  key={index}
                >
                  <View
                    style={{
                      flex: 0.7,
                      paddingTop: 10,
                      paddingLeft: 10,
                      paddingBottom: 10
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.item1}>ID : </Text>
                      <Text style={styles.item}>{item.id}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.item1}>First Name : </Text>
                      <Text style={styles.item}>{item.first_name}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.item1}>Last Name : </Text>
                      <Text style={styles.item}>{item.last_name}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.3,
                      justifyContent: "center",
                      overflow: "hidden",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      source={{ uri: item.avatar }}
                      style={{ height: 80, width: 65, borderRadius: 30 }}
                    />
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        {/* <View style={{ flex: 0.2, backgroundColor: "blue" }} /> */}
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
