import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

const TopStatus = ({fullscreen}) => {
  return (
    <View>
      <StatusBar
        backgroundColor={fullscreen ? 'transparent' : '#fff'}
        translucent={fullscreen}
      />
    </View>
  );
};

export default TopStatus;
