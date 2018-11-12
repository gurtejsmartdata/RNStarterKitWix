import { SERVER_URL } from "../../constants/url";
import * as types from "../../actionTypes";
import { Navigation } from "react-native-navigation";
import { Alert } from "react-native";

export const signup = (data, componentId) => {
  console.log("data sign up===>", `${SERVER_URL}users/register`, data);
  return (dispatch, getState) => {
    dispatch({ type: types.SIGNUP_REQUEST });
    fetch(`${SERVER_URL}users/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      // .then(res => {
      //   return res.json();
      // })
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: types.SIGNUP_SUCCESS, payload: data });
          Navigation.push(componentId, {
            component: {
              name: "Congratulation",
              options: {
                statusBar: {
                  style: "light"
                },
                topBar: {
                  visible: false,
                  drawBehind: true
                }
              }
            }
          });
        } else {
          dispatch({ type: types.SIGNUP_FAIL });
          Alert.alert(
            "Sign up",
            "Sign up failed, Please check if you are using the same email id for signing up."
          );
        }

        console.log("sign up response ==>", response);
      })
      .catch(err => {
        Alert.alert("Error", "Something went wrong. Please try again later.");
        dispatch({ type: types.SIGNUP_FAIL });
        console.log("Error ==>", err);
      });
  };
};
export const forgotPassword = (data, componentId) => {
  console.log(
    "data forgot password===>",
    `${SERVER_URL}users/forgotPassword`,
    data
  );
  return (dispatch, getState) => {
    dispatch({ type: types.FORGOTPASS_REQUEST });
    fetch(`${SERVER_URL}users/forgotPassword`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      // .then(res => {
      //   return res.json();
      // })
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: types.FORGOTPASS_SUCCESS });
          Navigation.push(componentId, {
            component: {
              name: "DetailsSent",
              options: {
                statusBar: {
                  style: "light"
                },
                topBar: {
                  visible: false,
                  drawBehind: true
                }
              }
            }
          });
        } else {
          dispatch({ type: types.FORGOTPASS_FAIL });
          Alert.alert(
            "Forgot password",
            "Sorry. We cannot find any account associated with this email."
          );
        }
        console.log("forgot pass response ==>", response);
      })
      .catch(err => {
        apiError();
        dispatch({ type: types.FORGOTPASS_FAIL });
        console.log("Error ==>", err);
      });
  };
};
