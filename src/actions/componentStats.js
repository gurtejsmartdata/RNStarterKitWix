import { Navigation } from "react-native-navigation";

export const manageComponentStats = (
  componentId,
  screenName,
  componentStats
) => {
  return dispatch => {
    let data = { ...componentStats, [screenName]: componentId };
    console.log(data, "datadatadata");
    dispatch({ type: "componentStats", payload: data });
  };
};
