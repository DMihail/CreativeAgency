import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

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
            <Icon
              name="arrowright"
              type="antdesign"
              color={'white'}
              size={30}
            />
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
      <View>
        <Button
          title="Регистрация"
          titleStyle={style.titleStyleFirstButton}
          containerStyle={style.buttonConteinerFirstButton}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#0C7952', '#289A71'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          onPress={turnToMain}
        />
      </View>

      <View>
        <Button
          title="Вход"
          type="clear"
          titleStyle={style.secondButton}
          onPress={turnToMain}
        />
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
  secondButton: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: 'white',
  },
  buttonConteinerFirstButton: {
    width: 300,
    borderBottomLeftRadius: 54,
    borderBottomRightRadius: 54,
    borderTopLeftRadius: 54,
    borderTopRightRadius: 54,
  },
  titleStyleFirstButton: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: 'white',
  },
  buttonConteinerSkipButton: {
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
  },
});

export default Skip;
