import React from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';

const MessageList = ({navigator}) => {
  return (
    <View>
      <FlatList
        data={massMessage}
        renderItem={(item) => {
          return <ListItem item={item} navigator={navigator} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const ListItem = ({item, navigator}) => {
  return(
    <View>
      <Image sourse={item.image} />
    </View>
  );

};


const style = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  item: {},
});

const massMessage = [
  {
    id: 123121121,
    title: 'Turan news',
    subtitle: 'Bitcoin снова поднялся вверх, его стоимость $28 000',
    time: '14:16',
    num: 100,
    leftIcon: true,
    rightIcon: false,
    image: require('../../../assets/image/user/turan.png'),
  },
  {
    id: 22332432312,
    title: 'Артем Самайда',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: 100,
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/artemc.png'),
  },
  {
    id: 3353535,
    title: 'Василий Николаевич',
    subtitle: 'Здравстуйте, могу предложить  новые способы зароботка, инт...',
    time: '13:40',
    num: 2,
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/vasa.png'),
  },
  {
    id: 4577567,
    title: 'Товары для дома',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: '',
    leftIcon: false,
    rightIcon: true,
    image: require('../../../assets/image/user/girl1.png'),
  },
  {
    id: 52423468,
    title: 'Артем Самайда',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: '',
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/artem.png'),
  },
  {
    id: 612315465,
    title: 'Jeneffer234',
    subtitle: 'Здравстуйте, могу предложить  новые способы зароботка, инт...',
    time: '13:40',
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/Jeneffer234.png'),
  },
  {
    id: 724257,
    title: 'Товары для дома',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: '',
    leftIcon: false,
    rightIcon: true,
    image: require('../../../assets/image/user/Товары для дома.png'),
  },
  {
    id: 775323348,
    title: 'Товары для дома',
    subtitle: 'Привет, скинь мне пару битков, я эфирчика подкину)',
    time: '14:16',
    num: '',
    leftIcon: false,
    rightIcon: false,
    image: require('../../../assets/image/user/Товары для дома.png'),
  },
];

export default MessageList;
