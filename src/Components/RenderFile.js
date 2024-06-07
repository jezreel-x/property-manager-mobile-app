// App.js
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

export default function RenderFile() {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setFile(result);
      // Read the file content if it's a text file
      if (result.mimeType.startsWith('text/')) {
        const content = await FileSystem.readAsStringAsync(result.uri);
        setFileContent(content);
      } else {
        setFileContent(null);
      }
    }
  };

  const renderFile = () => {
    if (!file) return null;

    const { uri, name, mimeType } = file;
    const fileType = name.split('.').pop();

    if (fileType === 'jpg' || fileType === 'jpeg' || fileType === 'png') {
      return <Image source={{ uri }} style={styles.image} />;
    }

    if (mimeType === 'application/pdf') {
      return (
        <View style={styles.fileInfo}>
          <Text>PDF File: {name}</Text>
          <Text>URI: {uri}</Text>
        </View>
      );
    }

    if (mimeType.startsWith('text/')) {
      return (
        <ScrollView style={styles.textContent}>
          <Text>{fileContent}</Text>
        </ScrollView>
      );
    }

    return (
      <View style={styles.fileInfo}>
        <Text>File Name: {name}</Text>
        <Text>File URI: {uri}</Text>
        <Text>File Type: {mimeType}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Document Picker Example</Text>
      <Button title="Pick a Document" onPress={pickDocument} />
      {renderFile()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 4,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  fileInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
  textContent: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    maxHeight: 300,
  },
});
