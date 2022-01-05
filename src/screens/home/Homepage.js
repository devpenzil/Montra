import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import TopStatus from '../../components/TopStatus';
import tailwind from 'tailwind-rn';
import BottomAppBar from '../../components/BottomAppBar';
import TopBar from '../../components/TopBar';

const Homepage = () => {
  const navigation = useNavigation();
  return (
    <>
      <TopStatus fullscreen={false} />
      <View style={tailwind('h-full w-full bg-white')}>
        <ScrollView>
          <TopBar />
        </ScrollView>
        <BottomAppBar />
      </View>
    </>
  );
};

export default Homepage;
