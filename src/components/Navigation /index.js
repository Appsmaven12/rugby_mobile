import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../screens/signup/signup';
import ForgotPassword from '../screens/forgot-password/forgotpassword';
import Roles from '../screens/role/roles';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAppFirstLaunched && (
          <Stack.Screen name="OnboardingScreen" component={OnBoarding} />
        )}
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignupScreen" component={SignUp} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
        <Stack.Screen name="Roles" component={Roles} />
        <Stack.Screen name="CoachInfo" component={CoachInformation} />
        <Stack.Screen name="AccountInfo" component={AccountInformation} />
        <Stack.Screen name="AddPlayerInfo" component={AddPlayerInformation} />
        <Stack.Screen
          name="AddPlayerCareerInfo"
          component={AddPlayerCareerInfo}
        />
        <Stack.Screen name="PlayerStats" component={PlayerStats} />
        <Stack.Screen name="FeedPage" component={FeedPage} />
        <Stack.Screen name="SearchPlayer" component={SearchPlayer} />
        <Stack.Screen
          name="AdvanceSearchPlayer"
          component={AdvanceSearchPlayer}
        />
        <Stack.Screen name="Connections" component={Connections} />
        <Stack.Screen name="CreateNewPost" component={CreateNewPost} />
        <Stack.Screen name="InviteMembers" component={InviteMembers} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
        />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="PlayerInformation" component={PlayerInformation} />
        <Stack.Screen name="InviteFriends" component={InviteFriends} />
        <Stack.Screen name="ProfileViews" component={ProfileViews} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SendFeedback" component={SendFeedback} />
        <Stack.Screen name="SendFeedback" component={SendFeedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
