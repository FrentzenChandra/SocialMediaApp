// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

export default function app() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
