import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import {Routes} from './Routes';
import {useNavigation} from '@react-navigation/native';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function Tab1() {
  return (
    <View>
      <Text>Tab 1</Text>
    </View>
  );
}

function Tab2() {
  return (
    <View>
      <Text>Tab 2</Text>
    </View>
  );
}

function Tab3() {
  return (
    <View>
      <Text>Tab 3</Text>
    </View>
  );
}

function MainMenuNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={Routes.Profile}
      screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
}

function ProfileTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Photos" component={Tab1} />
      <Tab.Screen name="Videos" component={Tab2} />
      <Tab.Screen name="Saved" component={Tab3} />
    </Tab.Navigator>
  );
}

function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name="Drawer" component={MainMenuNavigation} />
    </Stack.Navigator>
  );
}

export {MainNavigation, ProfileTabs};
