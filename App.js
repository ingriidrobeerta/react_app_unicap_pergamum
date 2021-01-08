import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import CheckBookScreen from './src/screens/CheckBookScreen';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from './src/AuthContext';

const navigator = createStackNavigator(
  {
    Book: CheckBookScreen,
    Home: HomeScreen,
    List: ListScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Biblioteca Unicap',
    },
  }
);
const AppContainer = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <AppContainer />
    </Provider>
  );
};
