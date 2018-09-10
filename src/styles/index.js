/*
Name : Parshant Nagpal
File Name : Styles.js
Description : Contains all App styles
Date : 6 Sept 2018
*/
 
import {StyleSheet,Dimensions} from 'react-native';
var {height,width }  = Dimensions.get('window');
export default StyleSheet.create({
    // MainScreen Container  Styles 
    mainScreenContainer : {
        flex: 1
    },
    mainScreenSubContainer : {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center'
    },
    mainScreenButtonStyle : {
        backgroundColor : 'red',
        height : height*0.10,
        width : width*0.80,
        justifyContent : 'center'
    },
    mainScreenTextStyle : {
        textAlign : 'center',
    }, 
    // Side menu Component 
    sideMenuContainer : {
      flex: 1
    },
    sideMenuSubContainer : {
        height: height*0.10,
        width : width*0.80,
        justifyContent : 'center',
        backgroundColor : 'red'
    },

})