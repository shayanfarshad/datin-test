/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Root } from "native-base";
import {
  StyleSheet, useColorScheme,
} from 'react-native';

import { NavigationContainer, CommonActions, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeProvider, useColorSchemeContext } from 'react-native-dynamic'
// import SplashScreen from '../screens/Splash';
import Home from '../screens/Home';
import Detail from '../screens/Detail';


const Stack = createStackNavigator();
// const config = {
//   animation: 'fade',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };


const App = () => {
  const scheme = useColorSchemeContext()
  const dark = {
    dark: true,
    colors: {
      primary: '#ffffff',
      background: '#242625',
      card: '#ffffff',
      text: '#ffffff',
      border: 'white',
      notification: 'white'
    }
  }
  return (
    <Root>
      <ColorSchemeProvider mode={scheme} >
        <Provider store={store}>
          <NavigationContainer ref={navigationRef} theme={scheme === 'dark' ? dark : DefaultTheme} >
            <Stack.Navigator screenOptions={{
              headerShown: false,
            }}>
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="detail" component={Detail} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ColorSchemeProvider>
    </Root>
  );
};

const styles = StyleSheet.create({

});

export default App;
export const navigationRef = React.createRef();
