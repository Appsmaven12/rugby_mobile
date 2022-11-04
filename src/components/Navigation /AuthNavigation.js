import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/login";
import SignUp from "../screens/signup/signup";
import ForgotPassword from "../screens/forgot-password/forgotpassword";
import ChangePassword from "../screens/ChangePassword/changepassword";
import OnBoarding from "../screens/onboarding/OnBoarding";
import Roles from "../screens/role/roles";
import AccountInformation from "../screens/AccountInformation/accountInformation";
import AddPlayerInformation from "../screens/AddPlayerInformation/addPlayerInformation";
import AddPlayerCareerInfo from "../screens/AddPlayerInfoCareer/addPlayerInfoCareer";
import PlayerStats from "../screens/PlayerStats/playerStats";
import CoachInformation from "../screens/coachInformation/coachInformatiomn";


const Stack = createStackNavigator();


const AuthNavigation = () => {

    return (
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="OnBoardingScreen" component={OnBoarding} />
            <Stack.Screen name="SignupScreen" component={SignUp} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
            <Stack.Screen name="Roles" component={Roles} />
            <Stack.Screen name="AccountInfo" component={AccountInformation} />
            <Stack.Screen name="AddPlayerInfo" component={AddPlayerInformation} />
            <Stack.Screen name="AddPlayerCareerInfo" component={AddPlayerCareerInfo} />
            <Stack.Screen name="PlayerStats" component={PlayerStats} />
            <Stack.Screen name="CoachInformation" component={CoachInformation} />
        </Stack.Navigator>

    )
}

export default AuthNavigation