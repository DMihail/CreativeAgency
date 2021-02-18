import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Message = () => {

  return (
    <View style={style.container}>
      <Text style={style.title}>
        За монету туран можно покупать любые товары,
        купить или продать
        недвижимось и еще много всего!
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
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    marginHorizontal: 15,
    textAlign: 'center',
  },
});

export default Message;
