import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';

const CommonButton = ({label, style, textcolor, trigger}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={trigger}
        style={tailwind(`mx-2 my-2 py-4 rounded-xl ${style}`)}>
        <Text
          style={tailwind(`text-center font-semibold text-lg ${textcolor}`)}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonButton;
