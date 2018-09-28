import * as types from "../../actionTypes";
import {Navigation} from 'react-native-navigation';

export const  pushTParticulatScreen=(componentId,screenNAme)=> {
  return (dispatch)=> {
    Navigation.push(componentId, {
      component: {
        name: screenNAme,
      }
    });
  };
}

export const pop=(componentId)=> {
  return (dispatch)=> {
    Navigation.pop(componentId)
  };
}
