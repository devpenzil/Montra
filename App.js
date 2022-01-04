import React from 'react';
import Onboarding from './src/screens/onboarding/Onboarding';
import SplashScreen from './src/screens/splashscreen/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/loginscreen/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupuScreen from './src/screens/signupscreen/SignupuScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="onboard" component={Onboarding} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signup" component={SignupuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
