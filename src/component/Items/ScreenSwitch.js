import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Loading from './Loading';
import WelcomeMessage from './WelcomeMessage';
import DotsPagination from './DotsPagination';
import Adt from './Adt';
import Message from './Message';
import Skip from './Skip';
import screens from '../../jsons/OnboardingItems.json';

const ScreenSwitch = ({navigation, route}) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0}} end={{x: 0.5, y: 1.0}}
      locations={[0, 0.6]}
      style={{flex: 1}}
      colors={['#23494E', '#042531']}>
      {setScreen(navigation, route)}
    </LinearGradient>
  );
};

const setScreen = (navigation, route) => {
  if (route.name === 'Loading') {
    return <Loading navigator={navigation} />;
  } else {
    return (
      <View style={style.conteiner}>
        <WelcomeMessage />
        {setImage(route.name)}
        <DotsPagination num={screens[route.name].dots} />
        <Adt adt={screens[route.name].adt} />
        <Message message={screens[route.name].message} />
        <Skip navigator={navigation} routeName={route.name} />
      </View>
    );
  }
};

const setImage = (index) => {
  const images = {
    Purse: require('../../../assets/image/screens/data.png'),
    TuranMap: require('../../../assets/image/screens/finance.png'),
    Chat: require('../../../assets/image/screens/messages.png'),
    Products: require('../../../assets/image/screens/shopping.png'),
    Immovables: require('../../../assets/image/screens/immovables.png'),
    Start: require('../../../assets/image/screens/Subtract.png'),
  };

  return (
    <View style={style.img}>
      <Image source={images[index]} />
    </View>
  );
};

const style = StyleSheet.create({
  conteiner: {
    flex: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    flex: 8,
  },
});

export default ScreenSwitch;
