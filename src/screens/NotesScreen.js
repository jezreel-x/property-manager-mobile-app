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
import AssignType from '../Components/AssignTypeOptions';
import PriorityType from '../Components/PriorityOptions';
import StatusType from '../Components/StatusTypeOptions';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { ImageDoc } from '../Components/fileImage';


const Notes = ({ navigation }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [file, setFile] = React.useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
        multiple: true,
        type: '*/*',
        copyToCacheDirectory: true
    });
    if (result.type === 'success') {
      setFile(result);
    }
  };

  const handleTitleChange = (d) => {
    setTitle(d);
  };

  const handleDescriptionChange = (d) => {
    setDescription(d);
  };

  const handleSubmit = () => {
    if (Title.trim() === '' || description.trim() === '') {
      Alert.alert('Oops! Please fill in all fields to continue.');
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
                source={require('C:/Users/User/Desktop/AirHousing App/PropertyManagerApp/assets/yellow.png')} />
               <Text style={styles.textTitle}>Title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleTitleChange}
                    value={title}
                    placeholder='Enter Note title'
                    keyboardType='default'
                />
                <View>
                    <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Attachment</Text>
                    <View style={{ 
                        flexDirection:'row', 
                        justifyContent: 'space-between',
                        marginHorizontal: 12,
                        marginVertical: 16
                    }}>
                        <Pressable style={styles.pickDocumentStyle} onPress={pickDocument}>
                            <Text style={{ color: '#fff' }}>Images</Text>
                        </Pressable>
                        <Pressable style={styles.pickDocumentStyle} onPress={pickDocument}>
                            <Text style={{ color: '#fff' }}>Documents(only in pdf format)</Text>
                        </Pressable>
                    </View>
                    <View styles={styles.fileArea}>
                        
                    </View>
                </View>
                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 18 }}>Description</Text>
                <View>
                    <TextInput
                        style={[styles.descriptionDescription, styles.input2, styles.input3]}
                        onChangeText={handleDescriptionChange}
                        value={description}
                        placeholder='Description'
                        multiline={true}
                        keyboardType='default'
                    />
                </View>
                <View style={styles.signCreateButton}>
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Create Notes</Text>
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
  pickDocumentStyle: {
    height: 50,
    padding: 15,
    backgroundColor: '#3498DB',
    borderRadius: 15
  },
  fileInfo: {
    marginTop: 20,
    alignItems: 'center',
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
  descriptionDescription: {
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
  fileArea: {
    width: 320,
    height: 300,
    borderRadius: 15, 
    backgroundColor: '#fff',
    marginTop: 10,
  },
  fileText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000'
  },
});

export default Notes;