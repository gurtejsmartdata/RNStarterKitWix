import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import { goToAuth } from '../config/navigation'
import {connect} from 'react-redux';
import * as AppAction from '../actions'

import {Navigation} from 'react-native-navigation';

 class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
      }
    };
  }
  logout = () => {
    this.props.dispatch(AppAction.logOut());
    goToAuth()
  }
  render() {
    console.log('props; ', this.props)
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button
          onPress={()=>this.logout()}
          title="Sign Out"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Screen2',
              }
            });
          }}
          title="View next screen"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default connect(null,null)(Home);