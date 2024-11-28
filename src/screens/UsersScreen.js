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
    Pressable,
    ScrollView
  } 
from 'react-native';
import UserType from '../Components/UserTypeOptions';


const Users = ({ navigation }) => {
  const [fName, setFirstName] = React.useState('');
  const [lName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleFirstNameChange = (a) => {
    setFirstName(a);
  };

  const handleLastNameChange = (b) => {
    setLastName(b);
  };

  const handleEmailChange = (c) => {
    setEmail(c);
  };

  const handlePasswordChange = (d) => {
    setPassword(d);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e);
  };

  const handleConfirmPasswordChange = (f) => {
    setConfirmPassword(f);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return (emailRegex.test(email));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const handleSubmit = () => {
    if (email.trim() === '' || password.trim() === '' || fName.trim() === '' || lName.trim() === ''
      || phoneNumber.trim() === '') {
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
            <ScrollView>
                <View style={styles.inputField}>
                <Image style={styles.tinyLogo} 
                source={require('../../assets/yellow.png')} />
                <Text style={styles.textTitle}>First Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleFirstNameChange}
                    value={fName}
                    placeholder='Enter First Name'
                    keyboardType='default'
                />
                <Text style={styles.textTitle}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleLastNameChange}
                    value={lName}
                    placeholder='Enter Last Name'
                    keyboardType='default'
                    secureTextEntry={true}
                />
                <Text style={styles.textTitle}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleEmailChange}
                    value={email}
                    placeholder='Email address'
                    keyboardType='default'
                />
                <Text style={styles.textTitle}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handlePasswordChange}
                    value={password}
                    placeholder='Enter Password'
                    keyboardType='default'
                    secureTextEntry={true}
                />
                <Text style={styles.textTitle}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleConfirmPasswordChange}
                    value={confirmPassword}
                    placeholder='Confirm Password'
                    keyboardType='default'
                    secureTextEntry={true}
                />
                <Text style={styles.textTitle}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handlePhoneNumberChange}
                    value={phoneNumber}
                    placeholder='e.g., 0722000000'
                    keyboardType='numeric'
                />
                <View>
                    <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>User Role</Text>
                    <UserType />
                </View>
                <View style={styles.signCreateButton}>
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Create User</Text>
                    </Pressable>
                </View>
                </View>
            </ScrollView>
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
  textTitle: {
    color: '#fff', marginLeft: 16, fontSize: 18
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
    marginVertical: 30
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

export default Users;