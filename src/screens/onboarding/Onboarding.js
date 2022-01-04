import React from 'react';
import {View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../components/CommonButton';
import OnBoardItems from '../../components/OnBoardItems';
import TopStatus from '../../components/TopStatus';
const Onboarding = () => {
  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('login');
  };
  const signup = () => {
    navigation.navigate('signup');
  };
  return (
    <>
      <TopStatus fullscreen={false} />
      <View style={tailwind('h-full w-full bg-white')}>
        <View style={tailwind('w-full')}>
          <OnBoardItems />
        </View>
        <View style={tailwind('absolute w-full bottom-0')}>
          <CommonButton
            label={'Sign Up'}
            style={'bg-purple-600'}
            textcolor={'text-white'}
            trigger={signup}
          />
          <CommonButton
            label={'Login'}
            style={'bg-purple-200'}
            textcolor={'text-purple-600'}
            trigger={login}
          />
        </View>
      </View>
    </>
  );
};

export default Onboarding;
