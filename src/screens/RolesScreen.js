import React from "react";
import Checkbox from "expo-checkbox";
import { ScrollView, TextInput } from "react-native";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const Roles = () => {
    const [inputValue, setInputValue] = React.useState('');
    const [isChecked, setChecked] = React.useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return(
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.text}>Create Role and Permissions</Text>
                    <Text style={styles.roleText}>Role Name</Text>
                    <TextInput
                    style={styles.input} 
                    onChangeText={handleInputChange}
                    value={inputValue}
                    placeholder="Enter role name"
                    keyboardType="default"
                    />
                    <View 
                    style={styles.separator}
                    />



                    <Text style={styles.roleText}>User</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>
                    <View 
                    style={styles.separator}
                    />



                    <Text style={styles.roleText}>Role</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Property</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={[styles.paragraph, styles.showText]}>Show</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Unit</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>
                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Tenant</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={[styles.paragraph, styles.showText]}>Show</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Invoice</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={[styles.paragraph, styles.showText]}>Show</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Invoice Payment</Text>
                    <View 
                    style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Expense</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={[styles.paragraph, styles.showText]}>Show</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Maintainer</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Maintenance Request</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={[styles.paragraph, styles.showText]}>Show</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Contact</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Support</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={[styles.paragraph, styles.showText]}>Reply</Text>
                    </View>

                    <View 
                    style={styles.separator}
                    />

                    <Text style={styles.roleText}>Note</Text>
                    <View style={styles.section}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Manage</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Create</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Edit</Text>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={styles.paragraph}>Delete</Text>
                    </View>

                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Create Account')}>
                        <Text>Create Role</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000'
    },
    showText: {
        marginLeft: 8
    },
    touch: {
        backgroundColor: 'yellow',
        padding: 15,
        width: 90,
        marginTop: 30,
        marginBottom: 60,
        alignSelf: 'center',
        borderRadius: 15
    },
    separator: {
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 25,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkbox: {
        margin: 8,
    },
    paragraph: {
        fontSize: 15,
        color: 'white'
    },
    roleText: {
        fontSize: 18, 
        color: '#fff',
        marginBottom: 8,
        marginLeft: 6
    },
    input: {
        height: 50,
        marginHorizontal: 3,
        backgroundColor: '#fff',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        borderRadius: 15
    },
    container: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 16,
        borderWidth: StyleSheet.hairlineWidth, 
        borderColor: 'yellow',
        borderRadius: 15,
        elevation: 2
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#fff'
    }
});

export default Roles;