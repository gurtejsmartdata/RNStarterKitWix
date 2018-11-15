/*
 * @file: Navigation.js
 * @description: Contains the navigation Stacks.
 * @date: 9.Oct.2018
 * @author: Ravi Kumar
 * */
import React from "react";
import { View, Text } from "react-native";
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
                text: "React Native"
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
                    text: "Login",
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
                  visible: false,
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
                          },
                          topBar: {
                            hideOnScroll: true,
                            title: {
                              text: "Homescreen",
                              color: "white"
                            },
                            leftButtons: [
                              {
                                id: "buttonOne",
                                icon: require("../assets/img/menu.png")
                              }
                            ],

                            // subtitle: {
                            //   text: "Sub Title",
                            //   fontSize: 14,
                            //   color: "white",
                            //   fontFamily: "Helvetica",
                            //   alignment: "center"
                            // },
                            background: {
                              color: "#05B8CC"
                              // component: {
                              //   name: "NavBar"
                              // }
                            },
                            drawBehind: false,
                            visible: true,
                            animate: true
                            // sideMenu: {
                            //   left: {
                            //     width: 260,
                            //     height: 270,
                            //     visible: false,
                            //     enabled: true
                            //   },
                            //   right: {
                            //     width: 260,
                            //     height: 270,
                            //     visible: false,
                            //     enabled: true
                            //   }
                            // }
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
                          },
                          topBar: {
                            hideOnScroll: true,
                            title: {
                              text: "Homescreen",
                              color: "white"
                            },
                            leftButtons: [
                              {
                                id: "buttonOne",
                                icon: require("../assets/img/menu.png")
                              }
                            ],

                            // subtitle: {
                            //   text: "Sub Title",
                            //   fontSize: 14,
                            //   color: "white",
                            //   fontFamily: "Helvetica",
                            //   alignment: "center"
                            // },
                            background: {
                              color: "#05B8CC"
                              // component: {
                              //   name: "NavBar"
                              // }
                            },
                            drawBehind: false,
                            visible: true,
                            animate: true
                            // sideMenu: {
                            //   left: {
                            //     width: 260,
                            //     height: 270,
                            //     visible: false,
                            //     enabled: true
                            //   },
                            //   right: {
                            //     width: 260,
                            //     height: 270,
                            //     visible: false,
                            //     enabled: true
                            //   }
                            // }
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
