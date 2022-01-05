import React from 'react';
import {View, Text, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import TopStatus from '../../components/TopStatus';

const Homepage = () => {
  const navigation = useNavigation();
  return (
    <>
      <TopStatus fullscreen={false} />
      <View>
        <Pressable
          onPress={() => {
            auth()
              .signOut()
              .then(() => {
                navigation.navigate('onboard');
              });
          }}>
          <Text>Hello</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Homepage;
