import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import img from '../../../assets/image/icons/Vector.png';

const Skip = ({navigator, routeName}) => {
  const massRoutes = [
    'Purse',
    'TuranMap',
    'Chat',
    'Products',
    'Immovables',
    'Start',
  ];

  const turn = () => {
    const index = massRoutes.indexOf(routeName);
    navigator.navigate(massRoutes[index + 1]);
  };
  const turnToMain = () => {
    navigator.reset({
      index: 0,
      routes: [{name: 'Messenger'}],
    });
  };

  if (routeName !== massRoutes[5]) {
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.touch} onPress={turn}>
          <View style={style.button}>
            <Image source={img} />
          </View>
          <View>
            <Text style={style.title}>Пропустить</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Button onPress={turnToMain} title="Регистрация" color="#0C7952" />
      <View>
        <Text>Вход</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 3,
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    textAlign: 'left',
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#289A71',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Skip;
