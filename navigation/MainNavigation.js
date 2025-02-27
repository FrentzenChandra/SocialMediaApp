import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import {Routes} from './Routes';
import {useNavigation} from '@react-navigation/native';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import TitleTabsProfile from '../components/TitleTabsProfile/TitleTabsProfile';
import globalStyle from '../assets/styles/styles';
import ProfilePhotosTabs from '../components/UserProfile/Tabs/ProfilePhotosTabs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

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
    <Tab.Navigator screenOptions={{tabBarStyle: {zIndex: 0}}}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TitleTabsProfile title="Photos" focused={focused} />
          ),
          tabBarIndicatorStyle: globalStyle.tabIndicatorOff,
        }}
        name="Photos"
        component={ProfilePhotosTabs}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TitleTabsProfile title="Videos" focused={focused} />
          ),
          tabBarIndicatorStyle: globalStyle.tabIndicatorOff,
        }}
        name="Videos"
        component={ProfilePhotosTabs}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TitleTabsProfile title="Saved" focused={focused} />
          ),
          tabBarIndicatorStyle: globalStyle.tabIndicatorOff,
        }}
        name="Saved"
        component={ProfilePhotosTabs}
      />
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
