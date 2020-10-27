/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Root } from "native-base";
import {
  Appearance,
  EventEmitter,
  StyleSheet, useColorScheme,
} from 'react-native';

import { NavigationContainer, CommonActions, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeProvider, DarkModeProvider, useColorSchemeContext } from 'react-native-dynamic'
// import SplashScreen from '../screens/Splash';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import { AppearanceProvider } from 'react-native-appearance';

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


function App({ navigation }) {
  const scheme = useColorScheme()
  const [isDarkMode, setDarkMode] = useState();
  const [isFocus, setFocus] = useState();
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
  // useEffect(() => {
  //     if (scheme === 'dark') {
  //       Appearance.addChangeListener(scheme)
  //     } else {
  //       setDarkMode(false)
  //     }
  //     setFocus(true)

  // }, [scheme]);


  return (
    <Root>
      <Provider store={store}>
        <AppearanceProvider>
          <NavigationContainer ref={navigationRef} theme={scheme === 'dark' ? dark : DefaultTheme} >
            <Stack.Navigator screenOptions={{
              headerShown: false,
            }}>
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="detail" component={Detail} />
            </Stack.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      </Provider>
    </Root>
  );
};

const styles = StyleSheet.create({

});

export default App;
export const navigationRef = React.createRef();
