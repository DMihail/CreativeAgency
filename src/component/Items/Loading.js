import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import img from '../../../assets/image/screens/Subtract.png';

const Loading = ({navigator}) => {
  setTimeout(() => {
    navigator.reset({
      index: 0,
      routes: [{name: 'Purse'}],
    });
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
