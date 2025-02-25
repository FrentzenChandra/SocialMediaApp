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
