/*
Name : Parshant Nagpal
File Name : DashBoard.js
Description : Contains the DashBoard tab
Date : 6 Sept 2018
*/

import React , { Component } from 'react';
import {View} from 'react-native';
import Constants from '../constants';
import Styles from '../styles'

class DashBoard extends Component {
    constructor(props){
        super(props);
        props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }
    componentDidMount(){
        this.props.navigator.setButtons({
            leftButtons: [
                {
                    title: 'toggle',
                    icon: Constants.Images.drawer.toggle,
                    buttonColor: Constants.Colors.White,
                    id: 'toggle' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                }
            ], // see "Adding buttons to the navigator" below for format (optional)
            rightButtons: [], // see "Adding buttons to the navigator" below for format (optional)
            animated: true // does the change have transition animation or does it happen immediately (optional)
        });
    }
    onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
			if (event.id == 'toggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                  });
            }
        }
    }
    render(){
        return(
        <View> 

        </View>
    );
    }
}
export default DashBoard;
