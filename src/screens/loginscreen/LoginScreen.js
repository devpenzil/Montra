import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
        <TouchableOpacity>
          <Text
            style={tailwind(
              'text-center text-xl font-bold text-base text-purple-600 mt-3 ',
            )}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <Text style={tailwind('text-center mt-4 text-black')}>
          Don’t have an account yet?{' '}
          <Text
            style={tailwind(
              'text-center mt-2 text-black underline text-purple-600 font-bold',
            )}>
            Sign Up
          </Text>
        </Text>
      </View>
    </>
  );
};

export default LoginScreen;
