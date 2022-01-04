import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tailwind from 'tailwind-rn';

const BackBar = ({label}) => {
  const navigation = useNavigation();
  return (
    <View style={tailwind('flex flex-row ')}>
      <Pressable
        style={tailwind(' ml-4 my-2 z-50 ')}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../../assets/arrowleft.png')}
          style={tailwind('w-6')}
        />
      </Pressable>
      <Text
        style={tailwind(
          'text-center font-bold text-xl text-black absolute w-full z-0',
        )}>
        {label}
      </Text>
    </View>
  );
};

export default BackBar;
