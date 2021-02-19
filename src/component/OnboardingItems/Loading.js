import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import img from '../../../assets/image/Subtract.png';

const Loading = ({navigator}) => {
  setTimeout(() => {
    navigator.navigate('Purse');
  }, 3000);

  return (
    <View style={style.conteiner}>
      <Image source={img} />
    </View>
  );
};

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
