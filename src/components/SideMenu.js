
/**
 * Name :Parshant Nagpal
 * File Name : SideMenu.js
 * Description : Contains the side menu of the app 
 * Date : 7 Sept 2018
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Styles from '../styles'
import Button from './common/Button'
import * as appActions from '../reducers/app/actions'


class SideMenu extends Component {
    constructor(props){
        super(props);
        this.closeToggle = this.closeToggle.bind(this);
        this.logout = this.logout.bind(this);
    }
    /*
    closes the toggle
    */
   closeToggle(){
    this.props.navigator.toggleDrawer({
        side: 'left'
      });
   }

   logout(){
    this.props.appActions.moveToScreen('MainScreen');
   }

    render(){
        return(
        <View style={Styles.sideMenuContainer}>
            <View style={Styles.sideMenuSubContainer}>
                <Button textStyle={Styles.mainScreenTextStyle}  buttonName={'Close Toggle'} onPress={this.closeToggle}/>
            </View>
            <View style={Styles.sideMenuSubContainer}>
                <Button textStyle={Styles.mainScreenTextStyle} buttonName={'Close Toggle'} onPress={this.closeToggle}/>
            </View>
            <View style={Styles.sideMenuSubContainer}>
                <Button textStyle={Styles.mainScreenTextStyle} buttonName={'Logout'} onPress={this.logout}/>
            </View>
        </View>
        );

    }
}
const mapDispatchToProps = dispatch => ({
    appActions : bindActionCreators(appActions,dispatch) 
})
export default connect(null,mapDispatchToProps)(SideMenu); 