/*
 * @file: Navigation.js
 * @description: Contains the navigation Stacks.
 * @date: 9.Oct.2018
 * @author: Parshant Nagpal
 * */

import { Navigation } from "react-native-navigation";

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: "App",
        children: [
          {
            component: {
              name: "SignIn",
              passProps: {
                text: "This is tab 1"
              },
              options: {
                statusBar: {
                  visible: true,
                  style: "light",
                  hideWithTopBar: true,
                  blur: true
                },
                topBar: {
                  hideOnScroll: true,
                  title: {
                    text: "This is tab 1",
                    color: "red"
                  },
                  subtitle: {
                    text: "Title",
                    fontSize: 14,
                    color: "red",
                    fontFamily: "Helvetica",
                    alignment: "center"
                  },
                  // background: {
                  //   color: "#00ff00",
                  //   component: {
                  //     name: "NavBar"
                  //   }
                  // },
                  drawBehind: true,
                  visible: true,
                  animate: false
                }
              }
            }
          }
        ]
      }
    }
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: "sideDrawer",
            name: "SideMenu"
          }
        },
        center: {
          bottomTabs: {
            id: "BottomTabsId",
            children: [
              {
                stack: {
                  id: "MY_STACK",
                  children: [
                    {
                      component: {
                        name: "Home",
                        options: {
                          bottomTab: {
                            fontSize: 12,
                            text: "Home",
                            icon: require("../assets/img/signin.png")
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: "Tab2",
                        options: {
                          bottomTab: {
                            text: "Tab 2",
                            fontSize: 12,
                            icon: require("../assets/img/signup.png")
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    }
  });
