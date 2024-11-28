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


const Contacts = ({ navigation }) => {
  const [fName, setFirstName] = React.useState('');
  const [lName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');


  const handleFirstNameChange = (a) => {
    setFirstName(a);
  };

  const handleLastNameChange = (b) => {
    setLastName(b);
  };

  const handleEmailChange = (c) => {
    setEmail(c);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e);
  };

  const handleSubjectChange = (d) => {
    setSubject(d);
  };

  const handleMessageChange = (d) => {
    setMessage(d);
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
                />
                <Text style={styles.textTitle}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleEmailChange}
                    value={email}
                    placeholder='Email address'
                    keyboardType='default'
                />
                <Text style={styles.textTitle}>Contact Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handlePhoneNumberChange}
                    value={phoneNumber}
                    placeholder='e.g., 0722000000'
                    keyboardType='numeric'
                />
               <Text style={styles.textTitle}>Subject</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleSubjectChange}
                    value={subject}
                    placeholder='Enter Contact Subject'
                    keyboardType='default'
                />
                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Message</Text>
                <View>
                    <TextInput
                        style={[styles.messageDescription, styles.input2, styles.input3]}
                        onChangeText={handleMessageChange}
                        value={message}
                        placeholder='Message'
                        multiline={true}
                        keyboardType='default'
                    />
                </View>
                <View style={styles.signCreateButton}>
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Create Contact </Text>
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
  messageDescription: {
    margin: 12,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 15,
    borderWidth: 2,
    padding: 10,
    textAlignVertical: 'top'
  },
  input2: {
    width: 320
  }, 
  input3: {
    height: 120
  }
});

export default Contacts;