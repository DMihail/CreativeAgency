import React from 'react';
import {Text, StyleSheet, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HeaderGradient = ({title}) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <LinearGradient
      style={{height: 50, width: windowWidth, justifyContent: 'center'}}
      colors={['#23494E', '#042531']}>
      <Text style={style.title}>
        {title}
      </Text>
      <Image />
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 17,
    marginHorizontal: 24,
    // alignSelf: 'center',
  },
});

export default HeaderGradient;
