import React from 'react';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../components/styles';
import TabBar from '../components/TabBar';

import Login from './../screens/Login';
import Signup from './../screens/signup';
import Welcome from '../screens/welcome';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Store from '../screens/Store';

import LogOut from '../screens/LogOut';
import HomeStay from './../CategoryComponents/HomeStay';
import SensorData from './../CategoryComponents/SensorData';
import LocalCuisine from './../CategoryComponents/LocalCuisine';
import ELearning from './../CategoryComponents/ELearning';
import Shopping from '../CategoryComponents/shopping';
import Traspotation from './../CategoryComponents/Transpotation';

const { primary, secondary, tertiary, darklight, brand } = colors;

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function DrawerNavigater() {
  return (
    <Drawer.Navigator initialRouteName="Categorys" >
      <Drawer.Screen name="Categorys" component={HomeScreen} />
      <Drawer.Screen name="Logout" component={LogOut} />
    </Drawer.Navigator>
  );
}

function Tabnavigater() {
  return (
    <BottomTab.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false,
        
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen name="Categories" component={DrawerNavigater} options={{ title: 'Home' }} />
      <BottomTab.Screen name="Store" component={Store} options={{ title: 'Shop ' }}  />
      <BottomTab.Screen name="Search" component={Search} options={{ title: 'Search ' }}  />
      <BottomTab.Screen name="Settings" component={Settings}  options={{ title: 'Seattings ' }} />
      <BottomTab.Screen name="Profile" component={Profile} options={{ title: 'Profile ' }}  />
    </BottomTab.Navigator>
  );
}

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftcontainerstyled: {
            padding: 20,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={Tabnavigater} />
        <Stack.Screen name='HomeStay' component={HomeStay} />
        <Stack.Screen name='SensorData' component={SensorData} />
        <Stack.Screen name='Shopping' component={Shopping}/>
        <Stack.Screen name='LocalCuisine' component={LocalCuisine}/>
        <Stack.Screen name='ELearning' component={ELearning}/>
        <Stack.Screen name='Transpotation' component={Traspotation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
