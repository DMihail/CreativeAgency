import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Wallet = ({navigation, route}) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0}} end={{x: 0.5, y: 1.0}}
      locations={[0, 0.6]}
      style={style.conteiner}
      colors={['#449D84', '#0F6071']}>
      <View>

      </View>
    </LinearGradient>
  )
};

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});


export default Wallet;
