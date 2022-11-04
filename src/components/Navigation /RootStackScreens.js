import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./DrawerNavigation";
import AuthNavigation from "./AuthNavigation";
import AllNavigation from "./StackNavigation";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoarding from "../screens/onboarding/OnBoarding";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actionsType/signUpAction";

const RootStack = createStackNavigator();

const RootStackScreens = ({ userToken }) => {
    const { token } = useSelector((state) => (state.signUp))

    const dispatch = useDispatch()
    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
    const _scteen_navigation = async () => {
        const appData = await AsyncStorage.getItem('isAppFirstLaunched');
        if (appData == null) {
            setIsAppFirstLaunched(true);
            AsyncStorage.setItem('isAppFirstLaunched', 'false');
        } else {
            setIsAppFirstLaunched(false);
            const value = await AsyncStorage.getItem('accessToken')
            if (token === "" && value) { dispatch(actions.updateToken(value)) }
        }
    };

    useEffect(() => {
        _scteen_navigation();
        SplashScreen.hide();
    }, []);


    AsyncStorage.getItem('accessToken').then((validToken) => {
        if (token === "" && validToken) { dispatch(actions.updateToken(validToken)) }
    }
    )

    return (
        isAppFirstLaunched != null && (
            <RootStack.Navigator screenOptions={{ headerShown: false }} >
                {/* <RootStack.Screen name="OnboardingScreen" component={OnBoarding} /> */}
                {token ? (
                    <>
                        <RootStack.Screen
                            name="App"
                            component={DrawerNavigation}
                            options={{
                                animationEnabled: false
                            }}
                        />
                        <RootStack.Screen
                            name="AllNavigation"
                            component={AllNavigation}
                            options={{
                                animationEnabled: false
                            }}
                        />
                    </>
                ) : (
                    <>
                        {isAppFirstLaunched && (
                            <RootStack.Screen name="OnboardingScreen" component={OnBoarding} />
                        )}
                        <RootStack.Screen
                            name="AuthNavigation"
                            component={AuthNavigation}
                            options={{
                                animationEnabled: false
                            }}
                        />
                    </>
                )}
            </RootStack.Navigator>
        )
    )
}

export default RootStackScreens