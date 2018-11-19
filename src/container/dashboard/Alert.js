import React from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Navigation } from "react-native-navigation";

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.isSideDrawerVisible = false;
    Navigation.events().bindComponent(this);
  }
  componentWillUnmount() {
    console.log("unmount");
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
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }} />
        <View style={{ flex: 0.8 }}>
          <View style={{ flex: 0.4, justifyContent: "center" }}>
            <Image
              style={{ height: 200, width: 200, alignSelf: "center" }}
              source={{ uri: "https://pushpad.xyz/brand_assets/logo.png" }}
            />
          </View>
          <View style={{ flex: 0.6 }}>
            <Text style={{ fontSize: 25, textAlign: "center" }}>
              Alert's will be displayed here
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#05B8CC",
              marginHorizontal: 20,
              marginVertical: 20,
              borderRadius: 30,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
              }}
            >
              Refresh
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1
  },
  item1: {
    fontSize: 17,
    fontWeight: "bold"
  },
  item: {
    fontSize: 15
  },
  details: {
    flexDirection: "row",
    alignItems: "center"
  }
});
