import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import img from '../../../assets/image/Vector.png';

const Skip = () => {

  return (
    <View style={style.container}>
      <View style={style.button}>
        <Image source={img} />
      </View>
      <Text style={style.title}>
        Пропустить
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#289A71',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Skip;
