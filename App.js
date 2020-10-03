import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './components/formscreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title="Add Patient"
        onPress={() => 
          navigation.navigate("Form")}
      />
      <Button
        title="View Patients"
        onPress={() =>
          navigation.navigate("Patient")}
      />
    </View>
  );
}

function PatientScreen() {
  return (
    <Text>This is Patient 1's Profile</Text>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={HomeScreen} />
        <Stack.Screen name="Patient" component={PatientScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;