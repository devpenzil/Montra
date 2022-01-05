import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';
import auth from '@react-native-firebase/auth';
const TopBar = () => {
  return (
    <View style={tailwind('flex flex-row justify-between items-center px-2')}>
      <Text style={tailwind('text-lg text-gray-900 font-bold')}>
        Welcome{' '}
        <Text style={tailwind('text-2xl text-purple-600 font-bold')}>
          {auth().currentUser.displayName}{' '}
        </Text>
      </Text>
      <View>
        <TouchableOpacity
          style={tailwind('w-10 h-10 rounded-full border-2 border-purple-600')}>
          <Image
            source={require('../../assets/obimg1.png')}
            style={tailwind('w-10 h-10 rounded-full ')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
