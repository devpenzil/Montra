import React, {useEffect, useState} from 'react';
import Onboarding from './src/screens/onboarding/Onboarding';
import SplashScreen from './src/screens/splashscreen/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/loginscreen/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupuScreen from './src/screens/signupscreen/SignupuScreen';
import Homepage from './src/screens/home/Homepage';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();
const App = () => {
  const [initail, setInitail] = useState(
    auth().currentUser !== null ? 'home' : 'onboard',
  );
  useEffect(() => {});
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initail}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="onboard" component={Onboarding} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signup" component={SignupuScreen} />
          <Stack.Screen name="home" component={Homepage} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
