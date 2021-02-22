import React from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import RadialGradient from 'react-native-radial-gradient';
import TabNavigator from './Items/TabNavigator';
import CardImg from '../../assets/image/screens/Card.png';
import Dots from 'react-native-dots-pagination';
import LinearGradient from 'react-native-linear-gradient';
import bitcoin from '../../assets/image/graphik/bitcoin.png';
import ethereum from '../../assets/image/graphik/Ethereum.png';
import tether from '../../assets/image/graphik/Tether.png';

const Wallet = ({navigation, route}) => {
  return (
    <RadialGradient
      style={style.view}
      colors={['#23494E', '#042531']}
      stops={[0.1, 0.4, 0.3, 0.75]}
      center={[100, 100]}
      radius={200}>
      <View style={style.conteiner}>
        <Header />
        <LinearGradient
          colors={['#ffffff', '#ffffff', '#ffffff']}
          style={{height: 1}}
        />
        <LinearGradient
          style={{height: 10}}
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)']}
        />

        <View style={{flex: 3, flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={CardImg} />
        </View>
        <View style={{flex: 2}}>
          <Dots
            length={3}
            active={1}
            passiveColor={'rgba(255, 212, 0, 0.2)'}
            activeColor={'#FFD400'}
            width={200}
            paddingVertical={0}
          />
        </View>
        <Wallets />
        <TabNavigator />
      </View>
    </RadialGradient>
  );
};

const Header = () => {
  return (
    <View style={style.header}>
      <Icon name="ios-newspaper" type="ionicon" color={'white'} />
      <Text style={style.title}>Кошелёк</Text>
      <Icon name="bell-o" type="font-awesome" color={'white'} />
    </View>
  );
};

const Wallets = () => {
  return (
    <View style={{flex: 2}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Icon name="add-circle-outline" type="ionicon" color={'white'} />
        <Text style={style.walletsTitle}>Мои кошельки</Text>
        <Icon name="settings-sharp" type="ionicon" color={'white'} />
      </View>
      <FlatList
        data={wallets}
        renderItem={(item) => {
          return <Item />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const Item = ({item}) => {
  return (
    <View>
      <LinearGradient
        colors={['#ffffff', '#ffffff', '#ffffff']}
        style={{height: 1}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <Icon name="bitcoin" type="material-community" color={'white'} />
        <View>
          <Text
            style={{fontSize: 17, fontFamily: 'Montserrat', color: 'white'}}>
            Bitcoin
          </Text>
          <Text style={{fontSize: 14, fontFamily: 'Montserrat', color: 'gray'}}>
            Личный
          </Text>
        </View>

        <View>
          <Image source={bitcoin} />
          <Text
            style={{color: 'green', fontSize: 12, fontFamily: 'Montserrat'}}>
            +5.2%
          </Text>
        </View>

        <View>
          <Text
            style={{fontSize: 17, fontFamily: 'Montserrat', color: 'white'}}>
            12.334253
          </Text>
          <Text style={{fontSize: 14, fontFamily: 'Montserrat', color: 'gray'}}>
            $24 256
          </Text>
        </View>
      </View>
      <LinearGradient
        colors={['#ffffff', '#ffffff', '#ffffff']}
        style={{height: 1}}
      />
    </View>
  );
};
const wallets = [
  {
    id: 1,
    title: 'Bitcoin',
    iconName: 'bitcoin',
    iconType: 'font-awesome',
    iconColor: 'orange',
    status: 'Личный',
    graphic: bitcoin,
    graphicNum: '+5.2%',
    num: 12.334253,
    price: '$24 256',
  },
  {
    id: 2,
    title: 'Ethereum',
    iconName: 'ethereum',
    iconType: 'material-community',
    iconColor: 'rgba(0, 0, 0, 0.1)',
    status: 'Рабочий',
    graphic: ethereum,
    graphicNum: '-1.5%',
    num: 12.334253,
    price: '$24 256',
  },
  {
    id: 3,
    title: 'Tether',
    iconName: 'bitcoin',
    iconColor: 'orange',
    status: 'Тёщи',
    graphic: tether,
    graphicNum: '+5.2%',
    num: 12.334253,
    price: '$24 256',
  },
  {
    id: 4,
    title: 'Bitcoin',
    iconName: 'bitcoin',
    iconColor: 'orange',
    status: 'Личный',
    graphic: bitcoin,
    graphicNum: '+5.2%',
    num: 12.334253,
    price: '$24 256',
  },
];

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
    marginVertical: 24,
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

export default Wallet;
