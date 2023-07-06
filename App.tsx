import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Screens/LoginScreen';
import CreateAccount from './src/Screens/CreateAccount';
import Welcome from './src/Screens/Welcome';
import ChatScreen from './src/Screens/ChatScreen';
import MainMenu from './src/Screens/MainMenu';
import Notification from './src/Screens/Notification';
import Profile from './src/Screens/Profile';

// Create the Stack Navigator
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Messages: undefined;
  Notification: undefined;
  MainMenu: undefined;
  Welcome: undefined;
  App: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch data
        await SplashScreen.preventAutoHideAsync();
        // Load all necessary data

        // Then hide the splash screen
        await SplashScreen.hideAsync();
        setIsSplashScreenVisible(false);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  if (isSplashScreenVisible) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Messages" component={ChatScreen} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={CreateAccount} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
