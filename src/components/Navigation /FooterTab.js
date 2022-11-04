import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntIcon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import FeedPage from '../screens/Feed/FeedPage';

import SearchPlayer from '../screens/SearchPlayer/searchPlayer';
import PlayerComparison from '../screens/PlayerComparison/PlayerComparison';
import MainProfile from '../screens/MainProfile/mainProfile';
import PlayerStats from '../screens/PlayerStats/playerStats';
import Events from '../screens/Events/Events';
import Messages from '../screens/Message/Message';

const Tab = createBottomTabNavigator();

const FooterTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName="FeedPage"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#64759C',
        tabBarHideOnKeyboard: true,
        tabBarStyle:{backgroundColor:'#152D68'},
      }}>
      <Tab.Screen
        name="FeedPage"
        component={FeedPage}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color}) => <Feather name="home" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: 'CALENDAR',
          tabBarIcon: ({color}) => <Feather name="calendar" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="SearchPlayer"
        component={SearchPlayer}
        options={{
          tabBarLabel: 'SEARCH',
          tabBarIcon: ({color}) => <AntIcon name="search1" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'MESSAGES',
          tabBarIcon: ({color}) => <Feather name="message-square" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="PlayerComparison"
        component={PlayerComparison}
        options={{
          tabBarLabel: 'COMPARE',
          tabBarIcon: ({color}) => <Feather name="users" color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default FooterTabs;
