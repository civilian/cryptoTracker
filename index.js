/**
 * @format
 */

// que se encargue de los gestos antes de mostrar la aplicacion
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
