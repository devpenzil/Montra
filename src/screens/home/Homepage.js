import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import TopStatus from '../../components/TopStatus';
import tailwind from 'tailwind-rn';
import BottomAppBar from '../../components/BottomAppBar';
import TopBar from '../../components/TopBar';
import SpendFrequency from '../../components/SpendFrequency';
import RecentTransaction from '../../components/RecentTransaction';
import Stats from '../../components/Stats';

const Homepage = () => {
  const navigation = useNavigation();
  return (
    <>
      <TopStatus fullscreen={false} />
      <View style={tailwind('h-full w-full bg-white')}>
        <ScrollView>
          <TopBar />
          <Stats />
          <SpendFrequency />
          <RecentTransaction />
        </ScrollView>
        <BottomAppBar />
      </View>
    </>
  );
};

export default Homepage;
