import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {
    const [initValue, setInitValue] = React.useState(0);
    return (
        <View style={styles.container}>
            {/* 
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
            */}
            <View style={{ marginTop: 30 }}>
                <ScrollView>
                    <View>
                        <TouchableOpacity style={styles.totalProp}>
                            <Text style={{ fontSize: 24, marginBottom: 18, fontWeight: '700', color: 'yellow' }}>Total Property</Text>
                            <Text style={{ fontSize: 24, color: 'yellow'}}>{initValue}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.totalProp}>
                            <Text style={{ fontSize: 24, marginBottom: 18, fontWeight: '700', color: 'yellow' }}>Total Unit</Text>
                            <Text style={{ fontSize: 24, color: 'yellow'}}>{initValue}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.totalProp}>
                            <Text style={{ fontSize: 24, marginBottom: 18, fontWeight: '700', color: 'yellow' }}>Total Invoice</Text>
                            <Text style={{ fontSize: 24, color: 'yellow'}}>${initValue}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.totalProp}>
                            <Text style={{ fontSize: 24, marginBottom: 18, fontWeight: '700', color: 'yellow' }}>Total Expense</Text>
                            <Text style={{ fontSize: 24, color: 'yellow' }}>${initValue}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Create Account')}>
                <Text>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.copyRight}>
                <Text style={styles.copyRightText}>Copyright 2024 - All rights reserved.</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222'
    },
    totalProp: {
        margin: 12,
        backgroundColor: '#171717',
        borderColor: '#000',
        borderRadius: 15,
        borderWidth: 2,
        padding: 10,
        textAlignVertical: 'top',
        elevation: 15,
        width: 360,
        height: 120
    },
    copyRight: {
        marginTop: 50
    },
    copyRightText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
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
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 15
    }
});

export default Dashboard;