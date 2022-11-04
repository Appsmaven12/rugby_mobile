import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings/settings';
import Profile from '../screens/Profile/Profile';
import FooterTabs from './FooterTab';
import CustomDrawer from '../common/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{headerShown: false}} initialRouteName='FeedPage'>
            <Drawer.Screen name="Home" component={FooterTabs} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};
 
export default DrawerNavigation;