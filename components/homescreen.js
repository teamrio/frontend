import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
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