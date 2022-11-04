import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ForgotPassword from '../screens/forgot-password/forgotpassword';
import Roles from '../screens/role/roles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Login from '../screens/login/login';
import Settings from '../screens/Settings/settings';
import Profile from '../screens/Profile/Profile';
import FeedPage from '../screens/Feed/FeedPage';
import PlayerComparison from '../screens/PlayerComparison/PlayerComparison';
import AddPlayerCareerInfo from '../screens/AddPlayerInfoCareer/addPlayerInfoCareer';
import PlayerStats from '../screens/PlayerStats/playerStats';
import AdvanceSearchPlayer from '../screens/AcvanceSearchPlayer/advanceSearchPlayer';

const Tab = createBottomTabNavigator();

const FooterTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="FeedPage"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="LoginScreen"
        component={Login}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <AntIcon name="home" color="black" size={25} />,
        }}
      />
      <Tab.Screen
        name="ForgotPasswordScreen"
        component={ForgotPassword}
        options={{
          tabBarLabel: 'calender',
          tabBarIcon: () => <AntIcon name="calendar" color="black" size={25} />,
        }}
      />
      <Tab.Screen
        name="PlayerComparison"
        component={PlayerComparison}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <AntIcon name="search1" color="black" size={25} />,
        }}
      />
      <Tab.Screen
        name="AdvanceSearchPlayer"
        component={AdvanceSearchPlayer}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <AntIcon name="search1" color="black" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default FooterTabs;
