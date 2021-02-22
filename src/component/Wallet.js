import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import RadialGradient from 'react-native-radial-gradient';

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
      </View>
    </RadialGradient>
  )
};


const Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.title}>Кошелёк</Text>
      <Icon
        raised
        name="bell"
        type="font-awesome"
        color="#f50"
        onPress={() => console.log('hello')} />
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

  },
});


export default Wallet;
