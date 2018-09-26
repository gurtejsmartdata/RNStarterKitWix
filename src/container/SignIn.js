import React, { Fragment } from 'react'
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native'

import { goHome } from '../config/navigation'

import * as AppAction from '../actions'
console.log('AppAction',AppAction)
class SignIn extends React.Component {
  state = {
    username: '', password: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = () => {
    const { username, password } = this.state;
    console.log(this.props,AppAction)
     this.props.dispatch(AppAction.login());
    goHome();
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Sign In'
          onPress={this.signIn}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 14
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
const mapStateToProps = state => ({
  user: state.user,
  app: state.app
})
export default connect(mapStateToProps,null)(SignIn);