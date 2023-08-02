import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MyCheckbox from '../Components/MyCheckbox';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import { TabParamList } from '../../App';
import * as SecureStore from 'expo-secure-store';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  App: { screen: keyof TabParamList };
  Welcome: undefined;
};
type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
      return;
    }
  
    const payload = {
      email,
      password,
    };
  
    fetch('https://itribez-node-apis.onrender.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Handle the successful login
          // Store the token securely
          SecureStore.setItemAsync('userToken', data.token)
            .then(() => {
              navigation.navigate('App', { screen: 'Welcome' });
            })
            .catch((error) => {
              console.error('Error storing token:', error);
            });
        } else {
          alert('Login failed: ' + data.message);
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again.');
      });
  };
  

  const handleGoogleLogin = () => {
    // Handle the login logic
    console.log("Logging in with email: ", email, " and password: ", password);
  };


  const handleFBLogin = () => {
    // Handle the login logic
    console.log("Logging in with email: ", email, " and password: ", password);
  };

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../../assets/logo.png')} //local path
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.checkboxForgotContainer}>
        <View style={styles.checkboxContainer}>
          <MyCheckbox isSelected={rememberMe} onCheckboxClick={() => setRememberMe(!rememberMe)} />
          <Text style={styles.label}>Remember me</Text>
        </View>

        <TouchableOpacity onPress={() => console.log('Forgot Password?')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.justText}>Or</Text>

      <TouchableOpacity style={styles.signUpUsingServiceProvidersButton} onPress={handleGoogleLogin}>
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpUsingServiceProvidersButton} onPress={handleFBLogin}>
        <Text style={styles.buttonText}>Sign In with Facebook</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  welcomeMessage: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  checkboxForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 8,
  },
  forgotPassword: {
    textAlign: 'right',
    color: 'blue',
    marginBottom: 20,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 20,
    marginBottom: 20,
  },
  signupText: {
    textAlign: 'center',
  },
  signupLink: {
    textAlign: 'center',
    color: 'blue',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  signUpUsingServiceProvidersButton: {
    backgroundColor: '#000000',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  justText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default LoginScreen;
