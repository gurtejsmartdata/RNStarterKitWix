/*
 * @file: Screen2.js
 * @description: Contains the Screen2 Container.
 * @date: 9.Oct.2018
 * @author: Ravi Kumar
 * */

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { goToAuth } from "../../config/navigation";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import * as AppAction from "../../actions";

class Screen3 extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Screen 3"
        }
      }
    };
  }
  render() {
    console.log(this.props.componentId, "Screen3props++");
    return (
      <View style={styles.container}>
        <Text>Screen 2</Text>
        <Button
          onPress={() => {
            // Navigation.pop(this.props.componentId)
            // In Edit-Screen
            Navigation.popTo("Component6");
          }}
          title="Go Back"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Screen4",
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
export default connect(
  null,
  null
)(Screen3);
