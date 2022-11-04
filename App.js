import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-native-paper';
import { AuthContext } from './src/components/Navigation /context';
import RootStackScreens from './src/components/Navigation /RootStackScreens';
import { MenuProvider } from 'react-native-popup-menu';
const RootStack = createStackNavigator();

const App = () => {

  const [userToken, setUserToken] = React.useState(null);
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        // setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        // setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        // setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);
  
  return (
      <View style={{ flex: 1 }}>
        <AuthContext.Provider value={authContext}>
          <Provider>
            <MenuProvider>
              <NavigationContainer>
                  <RootStackScreens userToken={userToken} />
              </NavigationContainer>
            </MenuProvider>
          </Provider>
        </AuthContext.Provider>
      </View>
    )
  // )
};

export default App;
