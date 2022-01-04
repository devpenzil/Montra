import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tailwind from 'tailwind-rn';
import TopStatus from '../../components/TopStatus';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('onboard');
    }, 1500);
  }, [navigation]);
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
