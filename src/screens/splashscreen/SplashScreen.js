import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopStatus from '../../components/topsstatus/TopStatus';

const SplashScreen = () => {
  return (
    <>
      <TopStatus fullscreen={true} />
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#7F3DFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
