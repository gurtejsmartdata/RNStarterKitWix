import {Navigation} from 'react-native-navigation';

export function registerScreens(store, Provider) {
  Navigation.registerComponentWithRedux('Home', () => require('./container/Home').default,  Provider,store);
  Navigation.registerComponentWithRedux('Loader', () => require('./container/Loader').default, Provider,store);
  Navigation.registerComponentWithRedux('SignIn', () => require('./container/SignIn').default, Provider,store);
  Navigation.registerComponentWithRedux('SignUp', () => require('./container/SignUp').default, Provider,store);
  Navigation.registerComponentWithRedux('Screen2', () => require('./container/Screen2').default,Provider,store);
}