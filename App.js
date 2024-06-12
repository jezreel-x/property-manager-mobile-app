import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import React from "react";

import CreateAccount from "./src/screens/createAccountScreen";
import HomeScreen from "./src/screens/Homescreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import AppDrawer, { AboutDrawer } from "./AppDrawer";
import { Keyboard } from "react-native";

const Tab = createBottomTabNavigator();

const App = () => {
    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(!isKeyboardVisible);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(isKeyboardVisible)
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);


    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: 'below-icon',
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'yellow',
                tabBarStyle: {
                    backgroundColor: 'black',
                    height: 60,
                    display: isKeyboardVisible ? 'none' : 'flex'
                },
                tabBarLabelStyle: {
                    marginBottom: 6, 
                    fontSize: 12
                }
            }}>
                 <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home', 
                    tabBarIcon: ({ color }) => <SimpleLineIcons name="home" size={24} color={color} style={{ marginTop: 8}} />
                }} />
                <Tab.Screen name="Settings"  component={SettingsScreen} options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => <SimpleLineIcons name="settings" size={24} color={color} style={{ marginTop: 8}} />
                }} />
                <Tab.Screen name="Create Account" component={CreateAccount} options={{
                    tabBarLabel: 'Create Account',
                    tabBarIcon: ({ color }) => <FontAwesome6 name="user" size={24} color={color} style={{ marginTop: 8}} />,
                }} />
                <Tab.Screen name='About Drawer' component={AboutDrawer} options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="menu" size={28} color={color} style={{ marginTop: 8}} />,
                    headerShown: false
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;