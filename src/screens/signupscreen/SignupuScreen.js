import React from 'react';
import {View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import BackBar from '../../components/BackBar';
import TopStatus from '../../components/TopStatus';

const SignupuScreen = () => {
  return (
    <>
      <TopStatus />
      <View style={tailwind('w-full h-full bg-white')}>
        <BackBar label={'Signup'} />
        <View>
          <Text>Helllo</Text>
        </View>
      </View>
    </>
  );
};

export default SignupuScreen;
