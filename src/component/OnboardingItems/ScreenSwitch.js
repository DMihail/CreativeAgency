import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import Loading from './Loading';
import WelcomeMessage from './WelcomeMessage';
import DotsPagination from './DotsPagination';
import Adt from './Adt';
import Message from './Message';
import Skip from './Skip';
import screens from './OnboardingItems.json';

const ScreenSwitch = ({navigation, route}) => {
  console.log(route, navigation);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <RadialGradient
      style={{flex: 1}}
      colors={['#23494E', '#042531']}
      stops={[0.0, 1.0]}
      center={[windowWidth / 2, windowHeight / 2]}
      radius={200}>
      {setScreen(navigation, route)}
    </RadialGradient>
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
        <DotsPagination />
        <Adt />
        <Message />
        <Skip navigator={navigation} routeName={route.name} />
      </View>
    );
  }
};

const setImage = (index) => {
  const images = {
    Purse: require('../../../assets/image/data.png'),
    TuranMap: require('../../../assets/image/finance.png'),
    Chat: require('../../../assets/image/messages.png'),
    Products: require('../../../assets/image/shopping.png'),
    Immovables: require('../../../assets/image/immovables.png'),
    Start: require('../../../assets/image/Subtract.png'),
  };

  return <Image source={images[index]} />;
};

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default ScreenSwitch;
