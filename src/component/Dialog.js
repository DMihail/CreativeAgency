import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import img from '../../assets/image/user/artem.png';
import LinearGradient from 'react-native-linear-gradient';

const Dialog = ({navigation, route}) => {
  const back = () => {
    navigation.navigate('Messenger');
  };

  return (
    <LinearGradient style={style.conteiner} colors={['#23494E', '#042531']}>
      <Header back={back} />
      <LinearGradient
        colors={['#ffffff', '#ffffff', '#ffffff']}
        style={{height: 1}}
      />
      <MessageList />
      <Panel />
    </LinearGradient>
  );
};

const MessageList = () => {
  return (
    <View style={{flex: 7, justifyContent: 'flex-end'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0F6071', '#449D84']}
        style={{
          flex: 0.1,
          width: 100,
          justifyContent: 'center',
          marginHorizontal: 20,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontSize: 14,
          }}>
          Привет)
        </Text>
      </LinearGradient>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0F6071', '#449D84']}
        style={{
          flex: 0.1,
          width: 200,
          justifyContent: 'center',
          marginHorizontal: 20,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontSize: 14,
          }}>
          Скинь мне пару битков)
        </Text>
      </LinearGradient>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0C7952', '#289A71']}
        style={{
          flex: 0.1,
          width: 200,
          justifyContent: 'center',
          marginHorizontal: 20,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontSize: 14,
          }}>
          Не, у меня нет 😔
        </Text>
      </LinearGradient>
    </View>
  );
};

const Header = ({back}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
      }}>
      <Icon
        name="chevron-back-outline"
        type="ionicon"
        color={'gray'}
        size={30}
        onPress={() => {
          back();
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Image source={img} />
        <Text
          style={{
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: 20,
            paddingLeft: 20,
          }}>
          Артем Самайда
        </Text>
      </View>
      <Icon name="search1" type="antdesign" color={'gray'} size={20} />
    </View>
  );
};

const Panel = () => {
  const [value, onChangeText] = React.useState('Напишите что-то');
  const width = Dimensions.get('window').width;
  return (
    <View
      style={{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
      }}>
      <Icon name="file-upload" type="material" color={'gray'} size={40} />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: width * 0.8,
          color: 'gray',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          paddingLeft: 20,
          fontSize: 14,
          fontFamily: 'Montserrat',
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Icon name="microphone" type="font-awesome" color={'gray'} size={30} />
    </View>
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
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Montserrat',
  },
  walletsTitle: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Montserrat',
  },
  walletsHeader: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Dialog;
