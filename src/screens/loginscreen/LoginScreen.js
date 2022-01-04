import React from 'react';
import {View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import BackBar from '../../components/BackBar';
import CommonButton from '../../components/CommonButton';
import CommonInput from '../../components/CommonInput';
import TopStatus from '../../components/TopStatus';

const LoginScreen = () => {
  return (
    <>
      <TopStatus fullscreen={false} />
      <View style={tailwind('w-full h-full bg-white')}>
        <BackBar label={'Login'} />
        <View style={tailwind('p-2 mt-8')}>
          <CommonInput placeholder={'Email'} />
          <CommonInput placeholder={'Password'} password={true} />
          <CommonButton
            label={'login'}
            style={'bg-purple-600'}
            textcolor={'text-white'}
          />
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
