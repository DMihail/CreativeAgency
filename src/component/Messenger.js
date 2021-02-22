import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import TabNavigator from './Items/TabNavigator';
import MessageList from './Items/MessageList';

const Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.title}>Мессенджер</Text>
      <Image source={require('../../assets/image/icons/search.png')} />
    </View>
  );
};

const Messenger = ({navigation, route}) => {
  return (
    <RadialGradient
      style={style.view}
      colors={['#23494E', '#042531']}
      stops={[0.1, 0.4, 0.3, 0.75]}
      center={[100, 100]}
      radius={200}>
      <View style={style.conteiner}>
        <Header />
        <MessageList navigator={navigation} />
        <TabNavigator />
      </View>
    </RadialGradient>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 1,
  },
  conteiner: {
    flex: 10,
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 17,
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

export default Messenger;
