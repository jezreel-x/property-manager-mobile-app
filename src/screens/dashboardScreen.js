import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {
    const [initValue, setInitValue] = React.useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.secondView}>
                <View style={styles.thirdView}>
                    <MaterialCommunityIcons name="menu" size={24} color="yellow" />
                    <MaterialCommunityIcons name="menu-down" size={24} color="yellow" />
                </View>
                <View style={styles.fourthView}>
                    <Octicons name="moon" size={24} color="yellow" />
                    <FontAwesome6 name="user" size={24} color="yellow" />
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.totalProp}>
                    <Text style={{ fontSize: 24, marginBottom: 18, fontWeight: '700' }}>Total Property</Text>
                    <Text style={{ fontSize: 24}}>{initValue}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.totalProp}>
                    <Text style={{ fontSize: 24, marginBottom: 18, fontWeight: '700' }}>Total Unit</Text>
                    <Text style={{ fontSize: 24}}>{initValue}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.totalProp}>
                    <Text style={{ fontSize: 24, marginBottom: 18, fontWeight: '700' }}>Total Invoice</Text>
                    <Text style={{ fontSize: 24}}>${initValue}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.totalProp}>
                    <Text style={{ fontSize: 24, marginBottom: 18, fontWeight: '700' }}>Total Expense</Text>
                    <Text style={{ fontSize: 24}}>${initValue}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Create Account')}>
                <Text>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    totalProp: {
        margin: 12,
        backgroundColor: '#888',
        borderColor: '#000',
        borderRadius: 15,
        borderWidth: 2,
        padding: 10,
        textAlignVertical: 'top',
        width: 360,
        height: 120
    },
    secondView: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    thirdView: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80
    },
    fourthView: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80
    },
    touch: {
        backgroundColor: 'yellow',
        padding: 15,
        width: 110,
        marginTop: 650,
        alignSelf: 'center',
        borderRadius: 15
    }
});

export default Dashboard;