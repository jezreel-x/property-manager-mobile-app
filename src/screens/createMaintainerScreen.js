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
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Pressable,
    TouchableWithoutFeedback
  } 
from 'react-native';
import { MaintainerType } from '../Components/MaintenanceRequestOptions';
import ImageFile from '../Components/fileImage';

/*
import { Ionicons } from '@expo/vector-icons';
import DropdownTextInput from '../Components/DropdownTextInput';
import CountyOptions from '../Components/CountyOptions';


import AndroidCheckBox from '@react-native-community/checkbox';
import DropdownTextInput from './DropdownTextInput';
*/

const CreateMaintainer = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [property, setProperty] = React.useState('');



  const handleFirstName = (a) => {
    setFirstName(a);
  };

  const handleLastName = (b) => {
    setLastName(b);
  };

  const handleEmail = (c) => {
    setEmail(c);
  };

  const handlePhoneNum = (d) => {
    setPhoneNumber(d);
  };

  const handleProperty = (d) => {
    setProperty(d);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return (emailRegex.test(email));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumRegex = /^\d{10}$/;
    return (phoneNumRegex.test(phoneNumber));
  };

  const handleSubmit = () => {
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || 
        phoneNumber.trim() === '' || ID.trim() === '') {
      Alert.alert('Oops! Please fill in all fields to continue.');
      return;
    } else if (!validateEmail(email)) {
      Alert.alert('Oops! Please enter a valid email address.');
      return;
    } else if (!validatePhoneNumber(phoneNumber)) {
        Alert.alert('Oops! Please enter a valid mobile number.');
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
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inputField}>
                    <ScrollView>
                        <Image style={styles.tinyLogo} 
                        source={require('C:/Users/User/Desktop/AirHousing App/PropertyManagerApp/assets/yellow.png')} />
                        <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleFirstName}
                            value={firstName}
                            placeholder='First Name'
                            keyboardType='default'
                        />
                        <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Last Name</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput
                                style={[styles.input, styles.input2]}
                                onChangeText={handleLastName}
                                value={lastName}
                                placeholder='Last Name'
                                keyboardType='default'
                            />
                        </View>
                        <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Email</Text>
                        {/*
                             <View>
                                <TextInput
                                    style={[styles.description, styles.input2, styles.input3]}
                                    onChangeText={handleDescriptionChange}
                                    value={description}
                                    placeholder=''
                                    keyboardType='default'
                                />
                            </View>
                        */}
                        <TextInput
                            style={styles.input}
                            onChangeText={handleEmail}
                            value={email}
                            placeholder='Email'
                            keyboardType='default'
                        />
                        <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18}}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handlePhoneNum}
                            value={phoneNumber}
                            placeholder='Phone Number'
                            keyboardType='numeric'
                        />
                        <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Property</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleProperty}
                            value={property}
                            placeholder='Property'
                            keyboardType='default'
                        />
                        <View>
                            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Maintainer Type</Text>
                            <MaintainerType />
                        </View>
                        <View>
                            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Profile</Text>
                            <ImageFile />
                        </View>
                        <View>
                          <Pressable style={styles.button} onPress={() => navigation.navigate('Create Maintenance Request')}>
                            <Text style={styles.buttonText}>Create Maintainer</Text>
                          </Pressable>
                        </View>
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
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
    marginVertical: 20,
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
  description: {
    margin: 12,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 15,
    borderWidth: 2,
    padding: 10
  },
  input2: {
    width: 320
  }, 
  input3: {
    height: 120
  }, 
  text: {
    fontSize: 15
  }
});

export default CreateMaintainer;

