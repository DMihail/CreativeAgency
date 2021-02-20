import React from 'react';
import {StyleSheet, View} from 'react-native';
import Dots from 'react-native-dots-pagination';

const DotsPagination = ({num}) => {
  return (
    <View style={style.container}>
      <Dots
        length={6}
        active={num}
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
    flex: 2,
  }
});

export default DotsPagination;
