import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import HomeScreen from './src/screens/Homescreen';
import TextInputExample from './src/screens/createAccountScreen';
import SignIn from './src/screens/signIn';
import CreateProperty from './src/screens/createPropertyScreen';
import CreateTenant from './src/screens/createTenantScreen';
import CreateMaintainer from './src/screens/createMaintainerScreen';
import MaintenanceRequest from './src/screens/MaintenanceRequestScreen';
import Dashboard from './src/screens/dashboardScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen 
        name='Dashboard' 
        component={Dashboard}
        />
        <Stack.Screen name='Create Account' component={TextInputExample} />
        <Stack.Screen name='Sign In' component={SignIn} />
        <Stack.Screen name='Create Property' component={CreateProperty} />
        <Stack.Screen name='Create Tenant' component={CreateTenant} />
        <Stack.Screen name='Create Maintainer' component={CreateMaintainer} />
        <Stack.Screen name='Create Maintenance Request' component={MaintenanceRequest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AppStack;
