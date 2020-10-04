import React from 'react';
import { StyleSheet, Button, View, Text, Dimensions } from 'react-native';
import 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.main}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.drname}>Dr. Mike Watson</Text>
        </View>
        <View style={styles.btns}>
          <Text
            style={styles.btn}
            onPress={() =>
              navigation.navigate("Patient")}
          >
            View Patient
          </Text>
          <Text
            style={styles.btn}
            onPress={() =>
              navigation.navigate("Form")}
          >
            Add Patient
          </Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    main: {
        padding: 20,
        height: windowHeight,
    },
    btns: {
      marginTop: 20,
    },
    content: {
      marginTop: 150,
    },
    btn: {
      backgroundColor: 'skyblue',
      textAlign: 'center',
      fontSize: 15,
      padding: 10,
      margin: 5,
      borderRadius: 10,
    },
    welcome: {
      fontSize: 15,
      textAlign: 'center',
    },
    drname: {
      fontSize:40,
      fontWeight: 'bold',
      textAlign: "center",
    }
  });