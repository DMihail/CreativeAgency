import React from 'react';
import {Image, Dimensions, View} from 'react-native';
import img from '../../assets/image/Subtract.png';
import RadialGradient from 'react-native-radial-gradient';
import WelcomeMessage from './OnboardingItems/WelcomeMessage';
import DotsPagination from './OnboardingItems/DotsPagination';
import Adt from './OnboardingItems/Adt';
import Message from './OnboardingItems/Message';
import Skip from './OnboardingItems/Skip';

export const Onboarding = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <RadialGradient
      style={{flex: 1}}
      colors={['#23494E', '#042531']}
      stops={[0.0, 1.0]}
      center={[windowWidth / 2, windowHeight / 2]}
      radius={200}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <WelcomeMessage />
        <Image source={img} />
        <DotsPagination />
        <Adt />
        <Message />
        <Skip />
      </View>
    </RadialGradient>
  );
};
