import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Button, Text, View } from 'react-native';
import t from 'tcomb-form-native';
import 'react-native-gesture-handler';
// import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import FormPage from "./components/formpage.js"

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Patient 1"
        onPress={() =>
          navigation.navigate("Patient")} />
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Patient" component={PatientScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;