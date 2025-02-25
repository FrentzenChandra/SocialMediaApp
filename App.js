import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home/Home';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}  />
    </Stack.Navigator>
  );
}

export default function app() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
