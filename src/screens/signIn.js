import React from 'react';
import {
    Text,
    Button,
    Alert, 
    SafeAreaView, 
    StyleSheet, 
    TextInput, 
    View, 
    StatusBar, 
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable
  } 
from 'react-native';


import { Ionicons } from '@expo/vector-icons';

/*
import AndroidCheckBox from '@react-native-community/checkbox';
import DropdownTextInput from './DropdownTextInput';
*/

const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const handleEmailChange = (b) => {
    setEmail(b);
  };

  const handlePasswordChange = (d) => {
    setPassword(d);
  };

  const toggleVisibilityState = () => {
    setIsPasswordVisible(!isPasswordVisible)
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return (emailRegex.test(email));
  };

  const handleSubmit = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Oops! Please fill in all fields to continue.');
      return;
    } else if (!validateEmail(email)) {
      Alert.alert('Oops! Please enter a valid email address.');
      return;
    } else {
      Alert.alert('Successfully registered.');
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={10}
      >
        <View style={styles.inputField}>
            <Image style={styles.tinyLogo} 
            source={require('../../assets/yellow.png')} />
            <TextInput
                style={styles.input}
                onChangeText={handleEmailChange}
                value={email}
                placeholder='Email address'
                keyboardType='email-address'
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    style={[styles.input, styles.input2]}
                    onChangeText={handlePasswordChange}
                    value={password}
                    placeholder='Password'
                    keyboardType='default'
                    secureTextEntry={!isPasswordVisible}
                />
                {/*  
                <Ionicons 
                style={{ marginTop: 25, marginRight: 2 }} 
                name="eye-off-outline" size={24} color="white"
                onPress={toggleVisibilityState} 
                /> 
                */}
            </View>
            {/* <Button title={isPasswordVisible ? 'Visible' : 'Hidden'} onPress={toggleVisibilityState} /> */}
            <View style={{ flexDirection: 'row', margin: 15, justifyContent: 'flex-end'}}>
                <Pressable><Text style={{ color: 'plum' }}>Forgot Password?</Text></Pressable>
            </View>
            <View style={styles.signCreateButton}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Create Property')}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center'}}>
                <Text style={{ color: 'white', marginRight: 5 }}>Don't have an account? </Text>
                <Pressable><Text style={{ color: 'plum' }}>Create an account</Text></Pressable>
            </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight
  },
  checkbox: {
    alignSelf: 'center'
  },
  textSignIn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
  signCreateButton: {
    marginTop: 12
  },
  tinyLogo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 20
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  stretch: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 24
  },
  inputField: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 15, 
    justifyContent: 'center',
    borderColor: "yellow",
    marginVertical: 50
  },
  button: {
    marginBottom: 20,
    width: 320, // Define the width of the TouchableOpacity
    backgroundColor: 'yellow',
    marginHorizontal: 12,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  input: {
    margin: 12,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 15,
    borderWidth: 2,
    padding: 10
  },
  input2: {
    width: 320
  }
});

export default SignIn;