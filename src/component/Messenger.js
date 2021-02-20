import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TabNavigator from './Items/TabNavigator';
import MessageList from './Items/MessageList';

const Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.title}>
        Мессенджер
      </Text>
      <Image source={require('../../assets/image/icons/search.png')} />
    </View>
  );
};


const Messenger = ({navigation, route}) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0}} end={{x: 0.5, y: 1.0}}
      locations={[0, 0.6]}
      style={style.view}
      colors={['#449D84', '#0F6071']}>
      <View style={style.conteiner}>
        <Header />
        <MessageList navigator={navigation} />
        <TabNavigator />
      </View>
    </LinearGradient>
  )
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
