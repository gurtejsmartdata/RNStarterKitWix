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

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.isSideDrawerVisible = false;
    Navigation.events().bindComponent(this);
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
      </View>
    );
  }
}

const styles = StyleSheet.create({});
