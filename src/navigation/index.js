import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenSwitch from '../component/OnboardingItems/ScreenSwitch';

function Navigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Loading'}>
      <Stack.Screen
        name="Loading"
        component={ScreenSwitch}
        initialParams={{screen: 42}}
      />
      <Stack.Screen
        name="Purse"
        component={ScreenSwitch}
        initialParams={{screen: 42}}
      />
      <Stack.Screen
        name="TuranMap"
        component={ScreenSwitch}
        initialParams={{screen: 42}}
      />
      <Stack.Screen
        name="Chat"
        component={ScreenSwitch}
        initialParams={{screen: 42}}
      />
      <Stack.Screen
        name="Products"
        component={ScreenSwitch}
        initialParams={{screen: 42}}
      />
      <Stack.Screen
        name="Immovables"
        component={ScreenSwitch}
        initialParams={{screen: 42}}
      />
      <Stack.Screen
        name="Start"
        component={ScreenSwitch}
        initialParams={{screen: 42}}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
