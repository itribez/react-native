import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
//import MyCheckbox from '../Components/MyCheckbox';  // MyCheckbox file is located

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type RegistrationScreenProps = StackScreenProps<RootStackParamList, 'Register'>;

const CreateAccount = ({ navigation }: RegistrationScreenProps) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Handle registration here");
  };

  return (
    <View style={styles.container}>
     <Image 
        style={styles.logo}
        source={require('../../assets/logo.png')} //local path
      />
      <Text style={styles.welcomeMessage}>Welcome to iTribez!</Text>
      <Text style={styles.title}>Create your account</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text style={styles.signinText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signinLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinText: {
    textAlign: 'center',
  },
  signinLink: {
    textAlign: 'center',
    color: 'blue',
    marginLeft: 10,
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
});

export default CreateAccount;
