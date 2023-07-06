import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './src/Screens/LoginScreen';
import CreateAccount from './src/Screens/CreateAccount';
import Welcome from './src/Screens/Welcome';
import ChatScreen from './src/Screens/ChatScreen';
import MainMenu from './src/Screens/MainMenu';
import Notification from './src/Screens/Notification';
import Profile from './src/Screens/Profile';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  App: undefined;
};

export type TabParamList = {
  Welcome: undefined;
  Messages: undefined;
  Notification: undefined;
  MainMenu: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

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
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={CreateAccount} />
          <Stack.Screen name="App" component={AppTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const AppTabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Welcome" 
        component={Welcome}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='home' size={30} color={color} />,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }} 
      />
      <Tab.Screen 
        name="Messages" 
        component={ChatScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='add-outline' size={30} color={color} />,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }} 
      />
      <Tab.Screen 
        name="Notification" 
        component={Notification} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='notifications-outline' size={30} color={color} />,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='person' size={30} color={color} />,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }} 
      />
    </Tab.Navigator>
  );
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
