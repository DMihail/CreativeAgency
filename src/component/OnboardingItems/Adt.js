import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Adt = () => {

  return (
    <View style={style.container}>
      <Text style={style.title}>
        Кошелёк
      </Text>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
  },
});

export default Adt;
