import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';

const OnBoardItems = () => {
  const image1 = require('../../assets/obimg1.png');
  const image2 = require('../../assets/obimg2.png');
  const image3 = require('../../assets/obimg3.png');
  const [status, setStatus] = useState(0);
  const datas = [
    {
      image: image1,
      head: 'Gain total control of your money',
      text: 'Become your own money manager and make every cent count',
    },
    {
      image: image2,
      head: 'Know where your money goes',
      text: 'Track your transaction easily,with categories and financial report ',
    },
    {
      image: image3,
      head: 'Planning ahead',
      text: 'Setup your budget for each category so you in control',
    },
  ];

  const Renderitem = ({item}) => {
    return (
      <View style={tailwind('mt-2 w-96')}>
        <View style={tailwind('h-80')}>
          <Image source={item.image} style={tailwind('self-center')} />
        </View>
        <View style={tailwind('h-40')}>
          <Text
            style={tailwind('text-center text-gray-900 text-4xl font-bold')}>
            {item.head}
          </Text>
          <Text style={tailwind('text-center mx-8 mt-4 text-black text-sm')}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={tailwind('w-full')}>
      <Renderitem item={datas[status]} />
      <View style={tailwind(' self-center flex flex-row mt-8')}>
        <TouchableOpacity
          style={tailwind('w-3 h-3 bg-purple-600 rounded-full mx-2')}
          onPress={() => setStatus(0)}
        />
        <TouchableOpacity
          style={tailwind('w-3 h-3 bg-purple-600 rounded-full mx-2')}
          onPress={() => setStatus(1)}
        />
        <TouchableOpacity
          style={tailwind('w-3 h-3 bg-purple-600 rounded-full mx-2')}
          onPress={() => setStatus(2)}
        />
      </View>
    </View>
  );
};

export default OnBoardItems;
