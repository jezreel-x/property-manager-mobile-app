import React from 'react';
import {
    Text,
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

import DropdownTextInput from '../Components/FeaturedPropertyOptions';
// import DropdownTextInput from './Pages/DropdownTextInput';

const CreateAccount = ({ navigation }) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleFullnameChange = (a) => {
    setFullName(a);
  };

  const handleEmailChange = (b) => {
    setEmail(b);
  };

  const handlePhoneChange = (c) => {
    setPhone(c);
  };

  const handlePasswordChange = (d) => {
    setPassword(d);
  };

  const handleconfirmPasswordChange = (e) => {
    setConfirmPassword(e);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return (emailRegex.test(email));
  };

  const validatePhoneNumber = (phone) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phone);
  };

  const handleSubmit = () => {
    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      Alert.alert('Oops! Please fill in all fields to continue.');
      return;
    } else if (!validateEmail(email)) {
      Alert.alert('Oops! Please enter a valid email address.');
      return;
    } else if (!validatePhoneNumber(phone)) {
      Alert.alert('Oops! Please enter a valid phone number');
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match.');
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
          <TextInput
              style={styles.input}
              onChangeText={handlePasswordChange}
              value={password}
              placeholder='Password'
              keyboardType='default'
              secureTextEntry={true}
          />
          <TextInput
              style={styles.input}
              onChangeText={handleconfirmPasswordChange}
              value={confirmPassword}
              placeholder='Confirm Password'
              keyboardType='default'
              secureTextEntry={true}
          />
          <View style={styles.signCreateButton}>
              <Pressable style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Create Account</Text>
              </Pressable>
          </View>
          <View style={styles.textSignIn}>
            <Text style={{ color: 'plum', marginBottom: 20, fontSize: 16 }}>Already have an account?</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Sign In')}><Text style={{ color: '#000', fontSize: 16 }}>Sign In</Text></Pressable>
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
  textSignIn: {
    fontSize: 15,
    alignItems: 'center'
  },
  tinyLogo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 20
  },
  signCreateButton: {
    marginTop: 12
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
    padding: 10,
  },
});

export default CreateAccount;