// import React, { Component } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import axios from 'react-native-axios';
// import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

// // import API from '../utils/Api.js'

// const API = axios.create({
//     baseURL: 'https://ivyhacks-nice-fox-hu.mybluemix.net/80655ec-04f2-11eb-adc1-0242ac120002221250'
// })

// export default class FormPage extends Component {
//     state = {
//         name: "",
//     };

//     handleSubmit = event => {
//         event.preventDefau
//     }

//     constructor() {
//         super();
//         API.get("/name")
//             .then(res => {
//                 console.log(res)
//                 this.setState({ name: res.data })
//             })
//     }

//     render() {
//         return (
//             <View>
//               <Text>x</Text>
//               <StatusBar style="auto" />
//             </View>
//           );
//     }
// }