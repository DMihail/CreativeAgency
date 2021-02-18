import React from 'react';
import {Image, Dimensions} from 'react-native';
import img from '../../assets/image/Subtract.png';
import RadialGradient from 'react-native-radial-gradient';

export const Onboarding = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <RadialGradient
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}
      colors={['#23494E', '#042531']}
      stops={[0.0, 1.0]}
      center={[windowWidth / 2, windowHeight / 2]}
      radius={200}>
      <Image source={img} />
    </RadialGradient>
  );
};
