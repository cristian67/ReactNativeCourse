/**
 * @format
 */

import {AppRegistry} from 'react-native';

//Components
import App from "./src/App";
import  GenericScreen  from "./src/GenericScreen";

import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => GenericScreen);
