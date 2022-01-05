import {firebase} from '@react-native-firebase/database';
export const reference = firebase
  .app()
  .database('https://montra-baf50-default-rtdb.firebaseio.com/');
