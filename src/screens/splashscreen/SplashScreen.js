import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import tailwind from 'tailwind-rn';
import TopStatus from '../../components/TopStatus';

const SplashScreen = () => {
  return (
    <>
      <TopStatus fullscreen={true} />
      <View
        style={tailwind(
          'w-full h-full bg-purple-600 flex justify-center items-center',
        )}>
        <Image source={require('../../../assets/splashlogo.png')} />
      </View>
    </>
  );
};

export default SplashScreen;
