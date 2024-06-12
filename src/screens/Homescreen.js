import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* 
                <Text style={styles.text}>Home Screen</Text>
                <Button title='Go to Dashboard' onPress={() => navigation.navigate('Dashboard')} />
            */}
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.view1}>
                        <FontAwesome5 name="users" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Users Created</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view1}>
                        <Feather name="anchor" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Roles Created</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.view1}>
                        <Feather name="home" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Property Created</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view1}>
                        <MaterialCommunityIcons name="account-question-outline" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Inquiries Created</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.view1}>
                        <FontAwesome5 name="users" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Tenants Created</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view1}>
                        <FontAwesome5 name="file-invoice" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Invoices Created</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.view1}>
                        <MaterialIcons name="attach-money" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Expenses Created</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view1}>
                        <AntDesign name="tool" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Maintainers Created</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.view1}>
                        <MaterialIcons name="quick-contacts-mail" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Maintenance Requests Created</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view1}>
                        <AntDesign name="contacts" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Contacts created</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.view1}>
                        <MaterialIcons name="support-agent" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Supports Created</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view1}>
                        <SimpleLineIcons name="note" size={40} color="yellow" />
                        <Text style={{ color: 'yellow', fontSize: 16 }}>Notes created</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#222'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16, 
        color: '#fff'
    },
    view1: {
        padding: 10,
        width: 160,
        height: 130,
        backgroundColor: '#171717',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        marginVertical: 12,
        elevation: 20
    }
});

export default HomeScreen;