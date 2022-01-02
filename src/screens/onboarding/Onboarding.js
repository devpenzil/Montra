import React from 'react';
import {View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import TopStatus from '../../components/topsstatus/TopStatus';
const Onboarding = () => {
  return (
    <>
      <TopStatus />
      <View style={tailwind('h-full w-full')}>
        <Text>Hello</Text>
      </View>
    </>
  );
};

export default Onboarding;
