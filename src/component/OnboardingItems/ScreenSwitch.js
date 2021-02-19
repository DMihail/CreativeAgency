import React from 'react';
import {Image, Dimensions, View} from 'react-native';
import Loading from './Loading';
const ScreenSwitch = ({navigation, route}) => {
  console.log(route);

  if (route.name === 'Loading') {
    return <Loading navigator={navigation} />;
  } else {
    return(
      <View>

      </View>
    );
  }
};

export default ScreenSwitch;
