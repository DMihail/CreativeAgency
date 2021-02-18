import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WelcomeMessage = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>
        Добро пожаловать!
      </Text>
    </View>
  )
};


const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
  },
});

export default WelcomeMessage;
