import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './components/formscreen';
import PatientScreen from './components/patientscreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="View Patients"
        onPress={() =>
          navigation.navigate("Patient")}
      />
      <Button
        onPress={() => navigation.navigate('Form')}
        title="Add Patient"
      />
    </View>
  );
}

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