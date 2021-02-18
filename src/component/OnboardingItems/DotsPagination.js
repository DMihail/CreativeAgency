import React from 'react';
import {StyleSheet, View} from 'react-native';
import Dots from 'react-native-dots-pagination';

const DotsPagination = () => {

  return (
    <View style={style.container}>
      <Dots
        length={7}
        active={0}
        passiveColor={'#66FFFFFF'}
        activeColor={'#B2FFFFFF'}
        width={200}
        paddingVertical={0}
      />
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default DotsPagination;
