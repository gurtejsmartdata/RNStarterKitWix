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
import { manageComponentStats } from "../../actions/componentStats";

class Screen2 extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Screen 2"
        }
      }
    };
  }

  static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (props !== state) {
      return {};
    }
    // No state update necessary
    return null;
  }

  componentDidMount() {
    this.props.dispatch(
      manageComponentStats(
        this.props.componentId,
        "Screen2",
        this.props.componentStats
      )
    );
  }
  render() {
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
                name: "Screen3",
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
  return { componentStats: state.componentStats.componentStats };
}
export default connect(
  mapStateToProps,
  null
)(Screen2);
