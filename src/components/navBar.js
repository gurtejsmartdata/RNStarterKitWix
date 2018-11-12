import React, { Component } from "react";
import { View, Text } from "react-native";
import RF from "react-native-responsive-fontsize";
import FloatingLabel from "../vendors/react-native-floating-labels";

import { colors } from "../constants/theme";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Left</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Opps by name</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Right</Text>
        </View>
      </View>
    );
  }
}

export default NavBar;
