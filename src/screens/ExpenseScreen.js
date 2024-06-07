import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const Expense = () => {
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>Expense</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#fff'
    }
});

export default Expense;