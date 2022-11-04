import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from './CustomDrawer';
import Roles from '../screens/role/roles';
import Login from '../screens/login/login';
import SignUp from '../screens/signup/signup';
import ForgotPassword from '../screens/forgot-password/forgotpassword';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Roles" component={Roles} />
    <Drawer.Screen name="LoginScreen" component={Login} />
    <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
    </Drawer.Navigator> 

  );
};

export default DrawerStack;