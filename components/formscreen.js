import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, TextInput, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderHeightContext } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Component } from 'react';

export default class FormScreen extends Component {

  constructor()
  {
    super();
    this.state={
      name:'',
      sex:'',
      height:0,
      weight:0
    }
  }

  updateValue(text, field) {
    if (field == "name") {
      this.setState({
        name: text
      })
    } else if (field == "sex") {
      this.setState({
        sex: text
      })
    } else if (field == "height") {
      this.setState({
        height: text
      })
    } else {
      this.setState({
        weight: text
      })
    }
  }

  submit() {
    let collection = {}
    collection.name = this.state.name,
    collection.sex = this.state.sex,
    collection.height = this.state.height,
    collection.weight = this.state.weight
    console.warn(collection);

    var url = 'https://ivyhacks-nice-fox-hu.mybluemix.net/80655ec-04f2-11eb-adc1-0242ac120002221250';

    fetch(url, {
      method: "POST",
      body: JSON.stringify(collection),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(res => res.json())
  }

  render () {
    return (
      <View>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "name")}
        />
        <TextInput
          placeholder="Sex"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "sex")}
        />
        <TextInput
          placeholder="Height"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "height")}
        />
        <TextInput
          placeholder="Weight"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "weight")}
        />
        <TouchableOpacity style={styles.btn} onPress={() => this.submit()}>
          <Text>Add Patient</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5CF',
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'skyblue',
    height: 40,
    color: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  }
});