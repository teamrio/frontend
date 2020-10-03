import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FormScreen from './components/formscreen';
import PatientScreen from './components/patientscreen';
import HomeScreen from './components/homescreen';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name= "Dashboard" component={HomeScreen} />
      <MainStack.Screen name="Patient" component={PatientScreen}/>
    </MainStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Form" component={FormScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}