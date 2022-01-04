import React from 'react';
import {View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BackBar from '../../components/BackBar';
import CommonButton from '../../components/CommonButton';
import CommonInput from '../../components/CommonInput';
import TopStatus from '../../components/TopStatus';

const SignupuScreen = () => {
  return (
    <>
      <TopStatus />
      <View style={tailwind('w-full h-full bg-white')}>
        <BackBar label={'Signup'} />
        <View style={tailwind('p-2 mt-8')}>
          <CommonInput placeholder={'Name'} />
          <CommonInput placeholder={'Email'} />
          <CommonInput placeholder={'Password'} password={true} />
          <View style={tailwind('mx-2 my-2 flex flex-row')}>
            <BouncyCheckbox fillColor="#5e35b1" />
            <Text style={tailwind('text-xs w-3/4 text-black ')}>
              By signing up, you agree to the Terms of Service and Privacy
              Policy
            </Text>
          </View>
          <CommonButton
            label={'Sign up'}
            style={'bg-purple-600'}
            textcolor={'text-white'}
          />
        </View>
        <Text style={tailwind('text-center mt-4 text-black')}>
          Already have an account yet?{' '}
          <Text
            style={tailwind(
              'text-center mt-2 text-black underline text-purple-600 font-bold',
            )}>
            Sign In
          </Text>
        </Text>
      </View>
    </>
  );
};

export default SignupuScreen;
