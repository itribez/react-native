import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

type RootStackParamList = {
  Messages: undefined;
  Welcome: undefined;
  Profile: undefined;
};

type WelcomeScreenProps = StackScreenProps<RootStackParamList, 'Welcome'>;
const Welcome = ({ navigation }: WelcomeScreenProps) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (username === 'admin' && password === 'admin') {
      Alert.alert('Success', 'Logged in successfully');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Chat"
      onPress={() => navigation.navigate('Messages')}
    />
    <Button
      title="Go to Profile"
      onPress={() => navigation.navigate('Profile')}
    />
    </View>
  );
};

export default Welcome;
