import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tailwind from 'tailwind-rn';

const BottomAppBar = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(false);
  return (
    <View style={tailwind('absolute bottom-0 w-full')}>
      {active && (
        <View
          style={tailwind(
            'flex flex-row justify-between mb-4 rounded-md self-center w-40',
          )}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('addexpense');
            }}
            style={tailwind(
              'bg-red-500 w-14 h-14 flex justify-center items-center rounded-full p-2',
            )}>
            <Image source={require('../../assets/expense.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('addincome');
            }}
            style={tailwind(
              'bg-green-500 w-14 h-14 flex justify-center items-center rounded-full p-2',
            )}>
            <Image source={require('../../assets/income.png')} />
          </TouchableOpacity>
        </View>
      )}
      <View style={tailwind('bg-white py-2 w-full ')}>
        <TouchableOpacity
          onPress={() => setActive(!active)}
          style={tailwind(
            'w-14 h-14 rounded-full bg-purple-600 self-center flex justify-center items-center',
          )}>
          <Image source={require('../../assets/close.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomAppBar;
