import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TabNavigator = ({route, navigator}) => {
  const onPress = () => {};

  return (
    <LinearGradient
      start={{x: 0.0, y: 0}}
      end={{x: 0.5, y: 1.0}}
      locations={[0.1, 1]}
      style={style.view}
      colors={['#0F6071', '#0F6071']}>
      <View style={style.conteiner}>
        <TouchableOpacity style={style.item} onPress={onPress}>
          <Image source={require('../../../assets/image/icons/Wallet.png')} />
          <Text style={style.title}>Кошелёк</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.item} onPress={onPress}>
          <Image source={require('../../../assets/image/icons/Chat.png')} />
          <Text style={style.title}>Чат</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.item} onPress={onPress}>
          <Image source={require('../../../assets/image/icons/Products.png')} />
          <Text style={style.title}>Товары</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.item} onPress={onPress}>
          <Image source={require('../../../assets/image/icons/newitems.png')} />
          <Text style={style.title}>Недвижка</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.item} onPress={onPress}>
          <Image source={require('../../../assets/image/icons/customization.png')} />
          <Text style={style.title}>Настройки</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  view: {
    // flex: 1,
    height: 80,
    width: windowWidth,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: 'red',
    marginVertical: 30,
  },
  conteiner: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    color: 'white',
  },
});

export default TabNavigator;
