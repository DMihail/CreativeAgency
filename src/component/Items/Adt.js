import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Adt = ({adt}) => {

  return (
    <View style={style.container}>
      <Text style={style.title}>
        {adt}
      </Text>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 3,
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
  },
});

export default Adt;
