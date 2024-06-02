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

import { Ionicons } from '@expo/vector-icons';
import DropdownTextInput from '../Components/FeaturedPropertyOptions';
import CountyOptions from '../Components/CountyOptions';
import PropertyType from '../Components/PropertyTypeOptions';
import UnitType from '../Components/UnitTypeOptions';
import MaintenanceRequestOptions, { IssueType, Maintainer, Property, Status, Unit } from '../Components/MaintenanceRequestOptions';
import ImageFile from '../Components/fileImage';

/*
import AndroidCheckBox from '@react-native-community/checkbox';
import DropdownTextInput from './DropdownTextInput';
*/

const MaintenanceRequest = () => {
  const [property, setProperty] = React.useState('');
  const [unit, setUnit] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [physicalAddress, setPhysicalAddress] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [county, setCounty] = React.useState('');



  const handleTypeChange = (a) => {
    setType(a);
  };

  const handleNameChange = (b) => {
    setName(b);
  };

  const handleDescriptionChange = (c) => {
    setDescription(c);
  };

  const handleLocationChange = (d) => {
    setLocation(d);
  };

  const handlePhysicalAddress = (e) => {
    setPhysicalAddress(e);
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
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inputField}>
                    <ScrollView>
                        <Image style={styles.tinyLogo} 
                        source={require('C:/Users/User/Desktop/AirHousing App/PropertyManagerApp/assets/yellow.png')} />
                        <View>
                            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Property</Text>
                            <Property />
                        </View>
                        <View>
                            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Unit</Text>
                            <Unit />
                        </View>
                        <View>
                            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Request Date</Text>
                          
                        </View>
                        <View>
                            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Maintainer</Text>
                            <Maintainer />
                        </View>
                        <View>
                            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Issue Type</Text>
                            <IssueType />
                        </View>
                        <View>
                            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Status</Text>
                            <Status />
                        </View>
                        <View>
                            <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Issue Attachment</Text>
                            <ImageFile />
                        </View>
                        <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Notes</Text>
                        <View>
                            <TextInput
                                style={[styles.description, styles.input2, styles.input3]}
                                onChangeText={handlePhysicalAddress}
                                value={physicalAddress}
                                multiline={true}
                                placeholder='Notes'
                                keyboardType='default'
                            />
                        </View>
                        <View>
                          <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Create Maintenance Request</Text>
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
    padding: 10,
    textAlignVertical: 'top'
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

export default MaintenanceRequest;