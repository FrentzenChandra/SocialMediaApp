import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import {Routes} from './Routes';
import {useNavigation} from '@react-navigation/native';
import Profile from '../screens/Profile/Profile';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
