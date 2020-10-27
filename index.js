/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './navigation';
import {name as appName} from './app.json';
import { enableScreens } from 'react-native-screens';

enableScreens();

LogBox.ignoreAllLogs = true;
AppRegistry.registerComponent(appName, () => App);
