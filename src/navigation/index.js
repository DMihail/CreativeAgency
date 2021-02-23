import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenSwitch from '../component/Items/ScreenSwitch';
import Wallet from '../component/Wallet';
import Messenger from '../component/Messenger';
import Dialog from '../component/Dialog';

function Navigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Dialog'}>
      <Stack.Screen name="Loading" component={ScreenSwitch} />
      <Stack.Screen name="Purse" component={ScreenSwitch} />
      <Stack.Screen name="TuranMap" component={ScreenSwitch} />
      <Stack.Screen name="Chat" component={ScreenSwitch} />
      <Stack.Screen name="Products" component={ScreenSwitch} />
      <Stack.Screen name="Immovables" component={ScreenSwitch} />
      <Stack.Screen name="Start" component={ScreenSwitch} />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{title: 'Кошелёк'}}
      />
      <Stack.Screen
        name="Messenger"
        component={Messenger}
        options={{
          title: 'Мессенджер',
        }}
      />
      <Stack.Screen name="Dialog" component={Dialog} />
    </Stack.Navigator>
  );
}

export default Navigator;
