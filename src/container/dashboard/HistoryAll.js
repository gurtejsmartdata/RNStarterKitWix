import React from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Navigation } from "react-native-navigation";

export default class HistoryAll extends React.Component {
  constructor(props) {
    super(props);
    this.isSideDrawerVisible = false;
    Navigation.events().bindComponent(this);
    this.state = {
      data: [
        { id: 1, fname: "Adam", lname: "Lamb", age: 21, country: "USA" },
        { id: 2, fname: "Band", lname: "Pro", age: 21, country: "USA" },
        { id: 3, fname: "Clark", lname: "Bow", age: 22, country: "AUS" },
        { id: 4, fname: "Joe", lname: "Joe", age: 24, country: "JAP" },
        { id: 5, fname: "Barry", lname: "Pow", age: 61, country: "CAN" },
        { id: 6, fname: "Garry", lname: "Mann", age: 41, country: "RUS" }
      ]
    };
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
          {this.state.data.length > 0 ? (
            <ScrollView style={{ flex: 1 }}>
              {this.state.data.map(item => {
                return (
                  // <Text
                  //   style={{ fontSize: 20, paddingTop: 15, fontWeight: "bold" }}
                  // >
                  //   {item}
                  // </Text>
                  <View
                    style={{
                      height: 120,
                      flexDirection: "row",
                      borderWidth: 2,
                      borderColor: "#dadada",
                      marginHorizontal: 20,
                      marginBottom: 10,
                      borderRadius: 20,
                      overflow: "hidden"
                    }}
                  >
                    <View
                      style={{
                        flex: 0.7,
                        paddingTop: 10,
                        paddingLeft: 10,
                        paddingBottom: 10
                      }}
                    >
                      <View style={styles.details}>
                        <Text style={styles.item1}>ID : </Text>
                        <Text style={styles.item}>{item.id}</Text>
                      </View>
                      <View style={styles.details}>
                        <Text style={styles.item1}>First Name : </Text>
                        <Text style={styles.item}>{item.fname}</Text>
                      </View>
                      <View style={styles.details}>
                        <Text style={styles.item1}>Last Name : </Text>
                        <Text style={styles.item}>{item.lname}</Text>
                      </View>
                      <View style={styles.details}>
                        <Text style={styles.item1}>Age : </Text>
                        <Text style={styles.item}>{item.age}</Text>
                      </View>
                      <View style={styles.details}>
                        <Text style={styles.item1}>Country : </Text>
                        <Text style={styles.item}>{item.country}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.3,
                        justifyContent: "center",
                        overflow: "hidden",
                        alignItems: "center"
                      }}
                    />
                  </View>
                );
              })}
            </ScrollView>
          ) : (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ textAlign: "center", fontSize: 20 }}>
                No History
              </Text>
            </View>
          )}
        </View>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ data: [] });
            }}
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
              Clear
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
