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
                            icon: require("../assets/img/home.png"),
                            color: "black"
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
                        name: "HistoryAll",
                        options: {
                          bottomTab: {
                            text: "History",
                            fontSize: 12,
                            icon: require("../assets/img/history.png")
                          },
                          topBar: {
                            hideOnScroll: true,
                            title: {
                              text: "History",
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
                        name: "Notifications",
                        options: {
                          bottomTab: {
                            text: "Notifications",
                            fontSize: 12,
                            icon: require("../assets/img/notifications.png")
                          },
                          topBar: {
                            hideOnScroll: true,
                            title: {
                              text: "Notifications",
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

export const goToHistory = () =>
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
          stack: {
            children: [
              {
                component: {
                  name: "HistoryAll",
                  id: "His",
                  options: {
                    topBar: {
                      visible: true,
                      hideOnScroll: false,
                      title: {
                        text: "HISTORY",
                        color: "white"
                      },
                      leftButtons: {
                        id: "buttonOne",
                        icon: require("../assets/img/menu.png")
                      },
                      background: {
                        color: "#05B8CC"
                      },
                      drawBehind: true,
                      visible: true,
                      animate: true
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  });

export const goToAlert = () =>
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
          stack: {
            children: [
              {
                component: {
                  name: "Notifications",
                  id: "noti",
                  options: {
                    topBar: {
                      visible: true,
                      hideOnScroll: false,
                      title: {
                        text: "Alerts",
                        color: "white"
                      },
                      leftButtons: {
                        id: "buttonOne",
                        icon: require("../assets/img/menu.png")
                      },
                      background: {
                        color: "#05B8CC"
                      },
                      drawBehind: true,
                      visible: true,
                      animate: true
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  });
