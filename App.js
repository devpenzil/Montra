import React from 'react';
import {View, Text} from 'react-native';
import Onboarding from './src/screens/onboarding/Onboarding';
import SplashScreen from './src/screens/splashscreen/SplashScreen';

const App = () => {
  return (
    <View>
      {/* <SplashScreen /> */}
      <Onboarding />
    </View>
  );
};

export default App;
