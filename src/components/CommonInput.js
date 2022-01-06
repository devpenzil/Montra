import React from 'react';
import {View, TextInput} from 'react-native';
import tailwind from 'tailwind-rn';

const CommonInput = ({placeholder, password, triggerchange, numberinput}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={tailwind(
          'border-2 border-gray-200 my-2 mx-2 rounded-xl px-4 text-black',
        )}
        secureTextEntry={password}
        onChangeText={e => {
          triggerchange(e);
        }}
        keyboardType={numberinput ? 'numeric' : 'default'}
      />
    </View>
  );
};

export default CommonInput;
