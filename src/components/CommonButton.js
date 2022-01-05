import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import tailwind from 'tailwind-rn';

const CommonButton = ({label, style, textcolor, trigger, loading}) => {
  return (
    <View>
      <TouchableOpacity
        // disabled={!loading}
        onPress={trigger}
        style={tailwind(
          `mx-2 my-2 py-4 rounded-xl ${style} flex flex-row justify-center`,
        )}>
        {loading && <ActivityIndicator style={tailwind('mx-4')} color="#fff" />}
        <Text
          style={tailwind(`text-center font-semibold text-lg ${textcolor}`)}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonButton;
