import 'react-native-gesture-handler';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/Homescreen';
import Dashboard from './src/screens/dashboardScreen';
import CreateAccount from './src/screens/createAccountScreen';
import SignIn from './src/screens/signIn';
import CreateProperty from './src/screens/createPropertyScreen';
import CreateTenant from './src/screens/createTenantScreen';
import CreateMaintainer from './src/screens/createMaintainerScreen';
import MaintenanceRequest from './src/screens/MaintenanceRequestScreen';
import Roles from './src/screens/RolesScreen';
import Users from './src/screens/UsersScreen';
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Inquiries from './src/screens/InquiriesScreen';
import Invoice from './src/screens/InvoiceScreen';
import Expense from './src/screens/ExpenseScreen';
import Contacts from './src/screens/ContactsScreen';
import Supports from './src/screens/SupportsScreen';
import Notes from './src/screens/NotesScreen';

const Drawer = createDrawerNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator screenOptions={ ({ route }) => ({
                drawerIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <Feather name="home" size={24} color="white" />
                    } else if (route.name === 'Dashboard') {
                        return <AntDesign name="dashboard" size={24} color="white" />
                    } else if (route.name === 'Roles') {
                        return <Feather name="anchor" size={24} color="white" />
                    } else if (route.name === 'Users') {
                        return <Feather name="users" size={24} color="white" />
                    } else if (route.name === 'Create Account') {
                        return <MaterialCommunityIcons name="account-circle" size={24} color="white" />
                    } else if (route.name === 'Sign In') {
                        return <Entypo name="login" size={24} color="white" />
                    } else if (route.name === 'Create Property') {
                        return <Feather name="home" size={24} color="white" />
                    } else if (route.name === 'Create Tenant') {
                        return <FontAwesome5 name="users" size={24} color="white" />
                    } else if (route.name === 'Create Maintainer') {
                        return <AntDesign name="tool" size={24} color="white" />
                    } else if (route.name === 'Supports') {
                        return <MaterialIcons name="support-agent" size={24} color="white" />
                    } else if (route.name === 'Notes') {
                        return <SimpleLineIcons name="note" size={24} color="white" />
                    } else if (route.name === 'Contacts') {
                        return <AntDesign name="contacts" size={24} color="white" />
                    } else if (route.name === 'Create Maintenance Request') {
                        return <MaterialIcons name="quick-contacts-mail" size={24} color="white" />
                    } else if (route.name === 'Expense') {
                        return <MaterialIcons name="attach-money" size={24} color="white" />
                    } else if (route.name === 'Invoice') {
                        return <FontAwesome5 name="file-invoice" size={24} color="white" />
                    } else if (route.name === 'Inquiries') {
                        return <MaterialCommunityIcons name="account-question-outline" size={24} color="white" />
                    }
                },
                drawerLabelStyle: {
                    fontSize: 20,
                    fontWeight: '600',
                    color: 'white',
                },
                drawerContentStyle: {
                    backgroundColor: 'midnightblue'
                },
                drawerType: 'back',
                drawerHideStatusBarOnOpen: true,
                drawerStyle: {
                    marginTop: 0
                },
                headerStyle: {
                    backgroundColor: '#ccc',
                },
                drawerActiveTintColor: '#888'
            })}>
                <Drawer.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    title: 'Home',
                    drawerLabel: 'Home',
                    drawerActiveTintColor: '#888'
                }} 
                />
                <Drawer.Screen 
                name='Dashboard' 
                component={Dashboard} 
                options={{
                    title: 'My Dashboard',
                    drawerLabel: 'Dashboard',
                    drawerActiveTintColor: '#888',
                    headerRight: () => (
                        <View>
                            <View style={styles.fourthView}>
                                <MaterialCommunityIcons name="menu-down" size={24} color="black" />
                                <Octicons name="moon" size={24} color="black" />
                                <FontAwesome6 name="user" size={24} color="black" />
                            </View>
                        </View>
                    )
                }} 
                />
                <Drawer.Screen 
                name='Roles' 
                component={Roles} 
                />
                <Drawer.Screen 
                name='Users' 
                component={Users}
                options={{
                    title: 'Create Users',
                    drawerLabel: 'User'
                }} 
                />
                <Drawer.Screen name='Create Account' component={CreateAccount} 
                options={{
                    drawerLabel: 'Account'
                }}
                />
                <Drawer.Screen name='Sign In' component={SignIn} />
                <Drawer.Screen name='Create Property' component={CreateProperty}
                options={{
                    drawerLabel: 'Property'
                }}
                />
                <Drawer.Screen name='Inquiries' component={Inquiries} />
                <Drawer.Screen name='Create Tenant' component={CreateTenant} 
                options={{ drawerLabel: 'Tenant' }}
                />
                <Drawer.Screen name='Invoice' component={Invoice} />
                <Drawer.Screen name='Expense' component={Expense} />
                <Drawer.Screen name='Create Maintainer' component={CreateMaintainer}
                options={{
                    title: 'Create Maintainer',
                    drawerLabel: 'Maintainer'
                }}
                />
                <Drawer.Screen name='Create Maintenance Request' component={MaintenanceRequest}
                options={{
                    title: 'Create Maintenance Request',
                    drawerLabel: 'Maintenance Request'
                }}
                />
                <Drawer.Screen name='Contacts' component={Contacts} 
                options={{
                    title: 'Create Contacts',
                    drawerLabel: 'Contacts'
                }}
                />
                <Drawer.Screen name='Supports' component={Supports} 
                options={{
                    title: 'Create Support',
                    drawerLabel: 'Support'
                }}
                />
                <Drawer.Screen name='Notes' component={Notes}
                options={{
                    title: 'Create Notes',
                    drawerLabel: 'Notes'
                }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    fourthView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 140,
        marginRight: 20
    }
});

export default App;