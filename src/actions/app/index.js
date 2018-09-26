import * as types from "../../actionTypes";

export function appInitialized() {
  //return async function(dispatch, getState) {
  return async function(dispatch) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot("MainScreen"));
  };
}

export function changeAppRoot(root) {
  return { type: types.ROOT_CHANGED, root: root };
}



export function movedashBoardTab() {
  return async function(dispatch) {
    // login logic would go here, and when it's done, we switch app roots
    dispatch(changeAppRoot("after-login"));
  };
}

/*
Move to specified screen
*/
export const moveToScreen = root => ({
  type: types.ROOT_CHANGED,
  root
});

/*
Setting the navigator
*/
export const setNavigator = navigator => ({
  type: types.SET_NAVIGATOR,
  navigator
});
