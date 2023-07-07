import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, Button, Alert, ScrollView } from 'react-native';
import Post from '../Components/Post';
import NewPost from '../Components/NewPost';

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
    <ScrollView>
    <NewPost />
    <View>
      <Post title="First Post" content="This is the content of the first post" image={require('../../assets/logo.png')} />
      <Post title="Second Post" content="This is the content of the second post" image={require('../../assets/logo.png')} /> 
      <Post title="Third Post" content="This is the content of the third post" image={require('../../assets/logo.png')} />
    </View>
    </ScrollView>
  );
};

export default Welcome;
