import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MessageList = ({navigator}) => {
  return (
    <SafeAreaView style={style.conteiner}>
      <FlatList
        data={massMessage}
        renderItem={(item) => {
          return <ListItem item={item} navigator={navigator} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const ListItem = ({item, navigator}) => {
  return (
    <TouchableOpacity style={{flex: 2}}>
      <View style={style.item}>
        <View style={{flex: 1}}>
          <Image source={item.item.image} />
        </View>

        <View
          style={{
            flex: 4,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/image/icons/turan.png')}
              />
              <Text style={style.title}>{item.item.title}</Text>
              <Image source={require('../../../assets/image/icons/V.png')} />
            </View>
            <Text style={style.subtitle}>{item.item.subtitle}</Text>
          </View>

          <View
            style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={style.subtitle}>{item.item.time}</Text>
            <Text style={style.subtitle}>{item.item.num}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const tornToDialog = () => {};

const style = StyleSheet.create({
  conteiner: {
    flex: 8,
  },
  item: {
    flex: 1,
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'left',
    width: 200,
  },
});

const massMessage = [
  {
    id: 1,
    title: 'Turan news',
    subtitle: 'Bitcoin снова поднялся вверх, его стоимость $28 000',
    time: '14:16',
    num: 100,
    leftIcon: true,
    rightIcon: false,
    image: require('../../../assets/image/user/turan.png'),
  },
  {
    id: 2,
    title: 'Артем Самайда',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: 100,
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/artemc.png'),
  },
  {
    id: 3,
    title: 'Василий Николаевич',
    subtitle: 'Здравстуйте, могу предложить  новые способы зароботка, инт...',
    time: '13:40',
    num: 2,
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/vasa.png'),
  },
  {
    id: 4,
    title: 'Товары для дома',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: '',
    leftIcon: false,
    rightIcon: true,
    image: require('../../../assets/image/user/girl1.png'),
  },
  {
    id: 5,
    title: 'Артем Самайда',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: '',
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/artem.png'),
  },
  {
    id: 6,
    title: 'Jeneffer234',
    subtitle: 'Здравстуйте, могу предложить  новые способы зароботка, инт...',
    time: '13:40',
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/Jeneffer234.png'),
  },
  {
    id: 7,
    title: 'Товары для дома',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: '',
    leftIcon: false,
    rightIcon: true,
    image: require('../../../assets/image/user/HP.png'),
  },
  {
    id: 8,
    title: 'Товары для дома',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: '',
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/HP.png'),
  },
];

export default MessageList;
