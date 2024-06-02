import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'; 

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title='Go to Dashboard' onPress={() => navigation.navigate('Dashboard')} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16
    }
});

export default HomeScreen;