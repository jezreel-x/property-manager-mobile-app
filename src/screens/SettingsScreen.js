import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const SettingsScreen = () => {
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>SettingsScreen</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    }
});

export default SettingsScreen;